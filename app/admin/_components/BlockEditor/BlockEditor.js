'use client'

import { useState, useCallback, useEffect, useRef } from 'react'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { Plus, GripVertical, Trash2, Type, Heading1, Image, List, Quote, Code, Maximize2, Minimize2, ChevronRight, Check, Bold, Italic, Underline, Strikethrough, Subscript, Superscript, Eraser, Palette, Link as LinkIcon, Highlighter, AlignLeft, AlignCenter, AlignRight, AlignJustify, Text, Minus, Video, Indent, Outdent, Eye, X, ListOrdered, RotateCw, Sliders, Box, Circle as CircleIcon, Monitor, Sun, Cloud, Droplet, Square as SquareIcon, ArrowUpDown } from 'lucide-react'
import styles from './BlockEditor.module.css'

// Block type definitions
const BLOCK_TYPES = {
    paragraph: { icon: Type, label: 'Paragraph' },
    heading: { icon: Heading1, label: 'Heading' },
    image: { icon: Image, label: 'Image' },
    list: { icon: List, label: 'List' },
    quote: { icon: Quote, label: 'Quote' },
    code: { icon: Code, label: 'Code' },
    divider: { icon: Minus, label: 'Divider' },
    video: { icon: Video, label: 'Video' },
}

// Generate unique ID
const generateId = () => Math.random().toString(36).substr(2, 9)

// Create a new block
const createBlock = (type, content = '') => ({
    id: generateId(),
    type,
    content,
    align: 'left', // Default alignment
    ...(type === 'heading' && { level: 2 }),
    ...(type === 'image' && {
        url: '',
        alt: '',
        caption: '',
        link: '',
        width: '100%',
        height: 'auto',
        marginTop: '0px',
        marginBottom: '0px',
        opacity: 1,
        rotate: 0,
        objectFit: 'cover',
        shape: 'none',
        filters: { grayscale: 0, sepia: 0, blur: 0, brightness: 100 }
    }),
    ...(type === 'list' && { items: [''], ordered: false }),
    ...(type === 'video' && { url: '', embedUrl: '' }),
})

// Convert blocks to HTML
export const blocksToHtml = (blocks) => {
    return blocks.map(block => {
        const alignStyle = block.align && block.align !== 'left' ? ` style="text-align: ${block.align};"` : ''
        switch (block.type) {
            case 'paragraph':
                return `<p${alignStyle}>${block.content}</p>`
            case 'heading':
                return `<h${block.level}${alignStyle}>${block.content}</h${block.level}>`
            case 'image':
                const imgStyles = []
                if (block.width) imgStyles.push(`width: ${block.width}`)
                if (block.height && block.height !== 'auto') imgStyles.push(`height: ${block.height}`)
                if (block.border && block.border !== 'none') imgStyles.push(`border: ${block.border}`)

                // Advanced Styles
                if (block.opacity !== undefined && block.opacity < 1) imgStyles.push(`opacity: ${block.opacity}`)
                if (block.rotate) imgStyles.push(`transform: rotate(${block.rotate}deg)`)
                if (block.objectFit && block.objectFit !== 'cover') imgStyles.push(`object-fit: ${block.objectFit}`)

                // Shapes
                if (block.shape === 'rounded') imgStyles.push(`border-radius: 12px`)
                else if (block.shape === 'circle') imgStyles.push(`border-radius: 50%`)
                else if (block.shape === 'pill') imgStyles.push(`border-radius: 9999px`)
                else if (block.borderRadius && block.borderRadius !== '0') imgStyles.push(`border-radius: ${block.borderRadius}`)

                if (block.shadow) imgStyles.push(`box-shadow: 0 10px 25px rgba(0,0,0,0.15)`)

                // Filters
                const filters = []
                if (block.filters) {
                    if (block.filters.grayscale > 0) filters.push(`grayscale(${block.filters.grayscale}%)`)
                    if (block.filters.sepia > 0) filters.push(`sepia(${block.filters.sepia}%)`)
                    if (block.filters.blur > 0) filters.push(`blur(${block.filters.blur}px)`)
                    if (block.filters.brightness !== 100 && block.filters.brightness !== undefined) filters.push(`brightness(${block.filters.brightness}%)`)
                }
                if (filters.length) imgStyles.push(`filter: ${filters.join(' ')}`)

                // Add margin auto for centering
                if (block.align === 'center') imgStyles.push(`margin: 0 auto`)
                else if (block.align === 'right') imgStyles.push(`margin-left: auto`)

                // Spacing
                if (block.marginTop && block.marginTop !== '0px') imgStyles.push(`margin-top: ${block.marginTop}`)
                if (block.marginBottom && block.marginBottom !== '0px') imgStyles.push(`margin-bottom: ${block.marginBottom}`)

                const imgStyleAttr = imgStyles.length ? ` style="${imgStyles.join('; ')}"` : ''
                const figureStyles = []
                figureStyles.push(`text-align: ${block.align || 'center'}`)
                const figureStyleAttr = ` style="${figureStyles.join('; ')}"`

                const imgTag = `<img src="${block.url}" alt="${block.alt || ''}"${imgStyleAttr} />`
                const imgContent = block.link ? `<a href="${block.link}" target="_blank" rel="noopener noreferrer">${imgTag}</a>` : imgTag

                return `<figure${figureStyleAttr}>${imgContent}${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}</figure>`
            case 'list':
                const tag = block.ordered ? 'ol' : 'ul'
                return `<${tag}${alignStyle}>${block.items.map(item => `<li>${item}</li>`).join('')}</${tag}>`
            case 'quote':
                return `<blockquote${alignStyle}>${block.content}</blockquote>`
            case 'code':
                return `<pre${alignStyle}><code>${block.content}</code></pre>`
            case 'divider':
                return `<hr />`
            case 'video':
                return `<div class="video-embed"><iframe src="${block.embedUrl}" frameborder="0" allowfullscreen></iframe></div>`
            default:
                return ''
        }
    }).join('\n')
}

// Parse HTML to blocks
export const htmlToBlocks = (html) => {
    if (!html || html.trim() === '') {
        return [createBlock('paragraph', '')]
    }

    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const blocks = []

    doc.body.childNodes.forEach(node => {
        if (node.nodeType !== Node.ELEMENT_NODE) return

        const tag = node.tagName.toLowerCase()

        if (tag === 'p') {
            blocks.push(createBlock('paragraph', node.innerHTML))
        } else if (tag.match(/^h[1-6]$/)) {
            const block = createBlock('heading', node.innerHTML)
            block.level = parseInt(tag[1])
            blocks.push(block)
        } else if (tag === 'figure') {
            const img = node.querySelector('img')
            const figcaption = node.querySelector('figcaption')
            if (img) {
                const block = createBlock('image')
                block.url = img.src || ''
                block.alt = img.alt || ''
                block.caption = figcaption?.innerHTML || ''
                blocks.push(block)
            }
        } else if (tag === 'ul' || tag === 'ol') {
            const items = Array.from(node.querySelectorAll('li')).map(li => li.innerHTML)
            const block = createBlock('list')
            block.items = items.length ? items : ['']
            block.ordered = tag === 'ol'
            blocks.push(block)
        } else if (tag === 'blockquote') {
            blocks.push(createBlock('quote', node.innerHTML))
        } else if (tag === 'pre') {
            const code = node.querySelector('code')
            blocks.push(createBlock('code', code?.textContent || node.textContent))
        } else if (tag === 'hr') {
            blocks.push(createBlock('divider'))
        } else if (tag === 'div' && node.classList.contains('video-embed')) {
            const iframe = node.querySelector('iframe')
            if (iframe) {
                const block = createBlock('video')
                block.embedUrl = iframe.src
                // Try to recover original URL if possible, otherwise use embed
                block.url = iframe.src
                blocks.push(block)
            }
        }
    })

    return blocks.length ? blocks : [createBlock('paragraph', '')]
}

// Menu Configuration
// Menu Configuration
// Moved to ContextMenu component section


// Individual Block Components
const ParagraphBlock = ({ block, onChange }) => {
    const contentRef = useRef(null)
    const initializedRef = useRef(false)

    // Set initial content only once
    useEffect(() => {
        if (contentRef.current && !initializedRef.current) {
            contentRef.current.innerHTML = block.content
            initializedRef.current = true
        }
    }, [])

    // Update content when block changes from external source (like drag)
    useEffect(() => {
        if (contentRef.current && initializedRef.current) {
            // Only update if content is different AND we're not focused
            if (document.activeElement !== contentRef.current) {
                contentRef.current.innerHTML = block.content
            }
        }
    }, [block.content])

    const handleBlur = () => {
        if (contentRef.current) {
            const newContent = contentRef.current.innerHTML
            if (newContent !== block.content) {
                onChange({ ...block, content: newContent })
            }
        }
    }

    return (
        <div
            ref={contentRef}
            className={styles.blockContent}
            contentEditable
            suppressContentEditableWarning
            onBlur={handleBlur}
            data-placeholder="Type something..."
        />
    )
}

const HeadingBlock = ({ block, onChange }) => {
    const contentRef = useRef(null)
    const initializedRef = useRef(false)

    useEffect(() => {
        if (contentRef.current && !initializedRef.current) {
            contentRef.current.innerHTML = block.content
            initializedRef.current = true
        }
    }, [])

    useEffect(() => {
        if (contentRef.current && initializedRef.current) {
            if (document.activeElement !== contentRef.current) {
                contentRef.current.innerHTML = block.content
            }
        }
    }, [block.content])

    const handleBlur = () => {
        if (contentRef.current) {
            const newContent = contentRef.current.innerHTML
            if (newContent !== block.content) {
                onChange({ ...block, content: newContent })
            }
        }
    }

    return (
        <div className={styles.headingBlock}>
            <select
                value={block.level}
                onChange={(e) => onChange({ ...block, level: parseInt(e.target.value) })}
                className={styles.levelSelect}
            >
                {[1, 2, 3, 4, 5, 6].map(l => (
                    <option key={l} value={l}>H{l}</option>
                ))}
            </select>
            <div
                ref={contentRef}
                className={`${styles.blockContent} ${styles[`heading${block.level}`]}`}
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur}
                data-placeholder="Heading..."
            />
        </div>
    )
}

const ImageBlock = ({ block, onChange, onImageUpload }) => {
    const [resizeMode, setResizeMode] = useState(false)
    const [showAdvanced, setShowAdvanced] = useState(false)
    const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 })
    const wrapperRef = useRef(null)
    const imgRef = useRef(null)

    // Measure image dimensions
    useEffect(() => {
        const measureImage = () => {
            if (imgRef.current) {
                setImgDimensions({
                    width: imgRef.current.offsetWidth,
                    height: imgRef.current.offsetHeight
                })
            }
        }

        measureImage()
        window.addEventListener('resize', measureImage)

        // Create an observer to watch for size changes
        const observer = new ResizeObserver(measureImage)
        if (imgRef.current) observer.observe(imgRef.current)

        return () => {
            window.removeEventListener('resize', measureImage)
            observer.disconnect()
        }
    }, [block.width, block.height, block.url])

    // Exit resize mode when clicking outside or pressing Escape
    useEffect(() => {
        if (!resizeMode && !showAdvanced) return

        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setResizeMode(false)
                setShowAdvanced(false)
            }
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setResizeMode(false)
                setShowAdvanced(false)
            }
        }

        const preventDrag = (e) => {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                e.stopPropagation()
            }
        }

        const preventDragStart = (e) => {
            if (wrapperRef.current && wrapperRef.current.contains(e.target)) {
                e.preventDefault()
                e.stopPropagation()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('dragstart', preventDragStart, true)
        document.addEventListener('pointerdown', preventDrag, true)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('dragstart', preventDragStart, true)
            document.removeEventListener('pointerdown', preventDrag, true)
        }
    }, [resizeMode, showAdvanced])

    const handleFileChange = async (e) => {
        const file = e.target.files?.[0]
        if (file && onImageUpload) {
            try {
                const url = await onImageUpload(file)
                if (url) {
                    onChange({
                        ...block,
                        content: url,
                        url: url,
                        alt: file.name,
                        width: '100%',
                        height: 'auto',
                        marginTop: '0px',
                        marginBottom: '0px',
                        align: 'center',
                        borderRadius: '0',
                        border: 'none',
                        shadow: false,
                        opacity: 1,
                        rotate: 0,
                        objectFit: 'cover',
                        shape: 'none',
                        filters: { grayscale: 0, sepia: 0, blur: 0, brightness: 100 }
                    })
                }
            } catch (error) {
                console.error('Upload failed:', error)
            }
        }
    }

    const handleResizeStart = (e, direction) => {
        e.preventDefault()
        e.stopPropagation()
        const startX = e.clientX
        const startY = e.clientY
        const imgWrapper = e.target.closest(`.${styles.imageWrapper}`)
        const startWidth = imgWrapper.offsetWidth
        const startHeight = imgWrapper.offsetHeight

        const handleMouseMove = (moveEvent) => {
            const updates = {}

            if (direction === 'right' || direction === 'corner') {
                const newWidth = Math.max(50, startWidth + (moveEvent.clientX - startX))
                updates.width = `${newWidth}px`
            }

            if (direction === 'bottom') {
                const newHeight = Math.max(50, startHeight + (moveEvent.clientY - startY))
                updates.height = `${newHeight}px`
            } else if (direction === 'corner') {
                updates.height = 'auto'
            }

            if (Object.keys(updates).length > 0) {
                onChange({ ...block, ...updates })
            }
        }

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    const updateFilter = (type, value) => {
        const filters = block.filters || { grayscale: 0, sepia: 0, blur: 0, brightness: 100 };
        onChange({
            ...block,
            filters: { ...filters, [type]: type === 'blur' ? parseInt(value) : parseInt(value) }
        });
    };

    const imageStyles = {
        borderRadius: block.shape === 'circle' ? '50%' :
            block.shape === 'pill' ? '9999px' :
                block.shape === 'rounded' ? '12px' :
                    (block.borderRadius || '0'),
        border: block.border || 'none',
        boxShadow: block.shadow ? '0 10px 25px rgba(0,0,0,0.15)' : 'none',
        width: '100%',
        height: block.height && block.height !== 'auto' ? block.height : 'auto',
        opacity: block.opacity !== undefined ? block.opacity : 1,
        transform: `rotate(${block.rotate || 0}deg)`,
        filter: block.filters ?
            `grayscale(${block.filters.grayscale}%) sepia(${block.filters.sepia}%) blur(${block.filters.blur}px) brightness(${block.filters.brightness}%)` :
            'none',
        outline: resizeMode ? '2px dashed #3b82f6' : 'none',
        marginTop: block.marginTop || '0px',
        marginBottom: block.marginBottom || '0px'
    }

    // Parse width for slider (handle px and %)
    const currentWidth = block.width ? parseInt(block.width) : 100
    const widthUnit = block.width && block.width.includes('px') ? 'px' : '%'

    return (
        <div
            className={styles.imageBlock}
            style={{
                /* Root is now full width always, style here is empty or for future block-level margins */
            }}
            data-no-drag={resizeMode || showAdvanced ? 'true' : undefined}
            onMouseDown={(e) => (resizeMode || showAdvanced) && e.stopPropagation()}
        >
            {block.url ? (
                <div className={styles.imagePreview} ref={wrapperRef} style={{ display: 'flex', flexDirection: 'column', alignItems: block.align === 'left' ? 'flex-start' : block.align === 'right' ? 'flex-end' : 'center' }}>

                    {/* Image Style Toolbar - Centered or Aligned with Image? Let's center it or keep it at natural width */}
                    <div className={styles.imageStyleToolbar}>
                        {/* Alignment */}
                        <div className={styles.imageStyleGroup}>
                            <button type="button" className={`${styles.imageStyleBtn} ${block.align === 'left' ? styles.active : ''}`} onClick={() => onChange({ ...block, align: 'left' })} title="Align Left"><AlignLeft size={16} /></button>
                            <button type="button" className={`${styles.imageStyleBtn} ${block.align === 'center' || !block.align ? styles.active : ''}`} onClick={() => onChange({ ...block, align: 'center' })} title="Align Center"><AlignCenter size={16} /></button>
                            <button type="button" className={`${styles.imageStyleBtn} ${block.align === 'right' ? styles.active : ''}`} onClick={() => onChange({ ...block, align: 'right' })} title="Align Right"><AlignRight size={16} /></button>
                        </div>

                        <div className={styles.imageStyleDivider} />

                        {/* Width & Height Quick Controls */}
                        <div className={styles.imageStyleGroup}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingLeft: '4px' }}>
                                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>W</span>
                                <input type="text" className={styles.imageStyleInput} value={block.width || '100%'} onChange={(e) => onChange({ ...block, width: e.target.value })} style={{ width: '50px' }} title="Width" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', paddingRight: '4px' }}>
                                <span style={{ fontSize: '11px', color: '#64748b', fontWeight: '600' }}>H</span>
                                <input type="text" className={styles.imageStyleInput} value={block.height || 'auto'} onChange={(e) => onChange({ ...block, height: e.target.value })} style={{ width: '50px' }} title="Height" />
                            </div>
                        </div>

                        <div className={styles.imageStyleDivider} />

                        {/* Border */}
                        <select className={styles.imageStyleSelect} value={block.border || 'none'} onChange={(e) => onChange({ ...block, border: e.target.value })} title="Border">
                            <option value="none">No Border</option>
                            <option value="1px solid #e2e8f0">Thin Gray</option>
                            <option value="2px solid #cbd5e1">Medium Gray</option>
                            <option value="3px solid #94a3b8">Thick Gray</option>
                            <option value="2px solid #000">Black</option>
                            <option value="2px solid #3b82f6">Blue</option>
                            <option value="2px dashed #94a3b8">Dashed</option>
                        </select>

                        {/* Shadow Toggle */}
                        <button type="button" className={`${styles.imageStyleBtn} ${block.shadow ? styles.active : ''}`} onClick={() => onChange({ ...block, shadow: !block.shadow })} title="Toggle Shadow">
                            <Box size={16} /> Shadow
                        </button>

                        <div className={styles.imageStyleDivider} />

                        {/* Advanced Toggle */}
                        <button
                            type="button"
                            className={`${styles.imageStyleBtn} ${showAdvanced ? styles.active : ''}`}
                            onClick={() => setShowAdvanced(!showAdvanced)}
                        >
                            <Sliders size={16} /> Adjust
                        </button>

                        {/* Advanced Settings Panel POPUP - Inside Toolbar relative context */}
                        {showAdvanced && (
                            <div className={styles.advancedSettingsWrapper}>
                                {/* Real-time Dimensions Display */}
                                <div style={{ gridColumn: '1 / -1' }} className={styles.dimensionDisplay}>
                                    <span>Rendered Size:</span>
                                    <span className={styles.dimensionValue}>{Math.round(imgDimensions.width)}px x {Math.round(imgDimensions.height)}px</span>
                                </div>

                                {/* Dimensions & Spacing */}
                                <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: '8px', borderBottom: '1px solid #e2e8f0', paddingBottom: '12px' }}>
                                    <div style={{ fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <ArrowUpDown size={14} /> Dimensions & Spacing
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                        {/* Width Slider */}
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', color: '#64748b' }}>
                                                <span>Width ({widthUnit})</span>
                                                <span style={{ fontWeight: '600', color: '#334155' }}>{block.width || '100%'}</span>
                                            </div>
                                            <input
                                                type="range"
                                                min="0"
                                                max="100"
                                                value={currentWidth}
                                                onChange={(e) => onChange({ ...block, width: `${e.target.value}%` })}
                                                style={{ width: '100%', accentColor: '#3b82f6', height: '4px' }}
                                            />
                                        </div>
                                        {/* Margin */}
                                        <div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', color: '#64748b' }}>
                                                <span>Margins (px)</span>
                                            </div>
                                            <div style={{ display: 'flex', gap: '8px' }}>
                                                <div style={{ flex: 1 }}>
                                                    <input type="text" className={styles.imageStyleInput} placeholder="Top" value={block.marginTop || '0px'} onChange={(e) => onChange({ ...block, marginTop: e.target.value })} style={{ width: '100%' }} title="Margin Top" />
                                                </div>
                                                <div style={{ flex: 1 }}>
                                                    <input type="text" className={styles.imageStyleInput} placeholder="Bottom" value={block.marginBottom || '0px'} onChange={(e) => onChange({ ...block, marginBottom: e.target.value })} style={{ width: '100%' }} title="Margin Bottom" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Transforms */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <RotateCw size={14} /> Transform
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ minWidth: '50px' }}>Opacity</span>
                                        <input type="range" min="0" max="1" step="0.1" value={block.opacity !== undefined ? block.opacity : 1} onChange={(e) => onChange({ ...block, opacity: parseFloat(e.target.value) })} style={{ flex: 1, accentColor: '#3b82f6', height: '4px' }} />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ minWidth: '50px' }}>Rotate</span>
                                        <input type="range" min="0" max="360" step="1" value={block.rotate || 0} onChange={(e) => onChange({ ...block, rotate: parseInt(e.target.value) })} style={{ flex: 1, accentColor: '#3b82f6', height: '4px' }} />
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span style={{ minWidth: '50px' }}>Fit</span>
                                        <select value={block.objectFit || 'cover'} onChange={(e) => onChange({ ...block, objectFit: e.target.value })} style={{ flex: 1, padding: '4px', borderRadius: '4px', border: '1px solid #cbd5e1' }}>
                                            <option value="cover">Cover</option>
                                            <option value="contain">Contain</option>
                                            <option value="fill">Fill</option>
                                            <option value="scale-down">Scale Down</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Shapes */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Box size={14} /> Shape
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
                                        {[
                                            { id: 'none', label: 'Square', icon: <SquareIcon size={14} /> },
                                            { id: 'rounded', label: 'Round', icon: <Box size={14} style={{ borderRadius: '4px' }} /> },
                                            { id: 'circle', label: 'Circle', icon: <CircleIcon size={14} /> },
                                            { id: 'pill', label: 'Pill', icon: <Box size={14} style={{ borderRadius: '10px' }} /> },
                                        ].map(shape => (
                                            <button
                                                key={shape.id}
                                                type="button"
                                                onClick={() => onChange({ ...block, shape: shape.id })}
                                                className={styles.imageStyleBtn}
                                                style={{
                                                    justifyContent: 'flex-start',
                                                    background: block.shape === shape.id ? '#e2e8f0' : 'white',
                                                    border: block.shape === shape.id ? '1px solid #cbd5e1' : '1px solid transparent',
                                                    width: '100%'
                                                }}
                                            >
                                                {shape.icon} {shape.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Filters */}
                                <div style={{ gridColumn: '1 / -1', borderTop: '1px solid #e2e8f0', paddingTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <div style={{ fontWeight: '600', color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Monitor size={14} /> Filters
                                    </div>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'x 16px' }}>
                                        {[
                                            { id: 'grayscale', label: 'Gray', max: 100, unit: '%' },
                                            { id: 'sepia', label: 'Sepia', max: 100, unit: '%' },
                                            { id: 'blur', label: 'Blur', max: 20, unit: 'px' },
                                            { id: 'brightness', label: 'Bright', max: 200, unit: '%' },
                                        ].map(filter => (
                                            <div key={filter.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                                                <span style={{ minWidth: '45px' }}>{filter.label}</span>
                                                <input
                                                    type="range"
                                                    min="0"
                                                    max={filter.max}
                                                    value={block.filters?.[filter.id] ?? (filter.id === 'brightness' ? 100 : 0)}
                                                    onChange={(e) => updateFilter(filter.id, e.target.value)}
                                                    style={{ flex: 1, accentColor: '#6366f1', height: '4px' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Image - Width constrained here */}
                    <div
                        className={styles.imageWrapper}
                        style={{
                            display: 'inline-block',
                            position: 'relative',
                            width: block.width || '100%', // Width applied here
                            marginTop: '0px'
                        }}
                    >
                        <img ref={imgRef} src={block.url} alt={block.alt} style={imageStyles} />
                    </div>

                    {/* Alt, Caption & Link */}
                    <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px', width: block.width || '100%' }}>
                        <input type="text" placeholder="Alt text..." value={block.alt || ''} onChange={(e) => onChange({ ...block, alt: e.target.value })} className={styles.altInput} />
                        <input type="text" placeholder="Caption (optional)..." value={block.caption || ''} onChange={(e) => onChange({ ...block, caption: e.target.value })} className={styles.captionInput} />
                        <input type="url" placeholder="Link URL (optional)..." value={block.link || ''} onChange={(e) => onChange({ ...block, link: e.target.value })} className={styles.altInput} />
                    </div>
                    <button type="button" onClick={() => onChange({ ...block, url: '', alt: '', caption: '', link: '', width: '100%', height: 'auto', filters: { brightness: 100, grayscale: 0, sepia: 0, blur: 0 } })} className={styles.removeImage} style={{ marginTop: '8px' }}>Remove Image</button>
                </div>
            ) : (
                <label className={styles.uploadArea}>
                    <Image size={32} />
                    <span>Click to upload image</span>
                    <input type="file" accept="image/*" onChange={handleFileChange} hidden />
                </label>
            )}
        </div>
    )
}

const ListBlock = ({ block, onChange }) => {
    const addItem = () => {
        onChange({ ...block, items: [...block.items, ''] })
    }

    const updateItem = (index, value) => {
        const newItems = [...block.items]
        newItems[index] = value
        onChange({ ...block, items: newItems })
    }

    const removeItem = (index) => {
        if (block.items.length > 1) {
            onChange({ ...block, items: block.items.filter((_, i) => i !== index) })
        }
    }

    return (
        <div className={styles.listBlock}>
            <button
                type="button"
                onClick={() => onChange({ ...block, ordered: !block.ordered })}
                className={styles.listToggle}
            >
                {block.ordered ? 'Numbered' : 'Bullet'} List
            </button>
            <div className={styles.listItems}>
                {block.items.map((item, index) => (
                    <div key={index} className={styles.listItem}>
                        <span className={styles.listMarker}>
                            {block.ordered ? `${index + 1}.` : '•'}
                        </span>
                        <input
                            type="text"
                            value={item}
                            onChange={(e) => updateItem(index, e.target.value)}
                            placeholder="List item..."
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault()
                                    addItem()
                                }
                            }}
                        />
                        <button type="button" onClick={() => removeItem(index)} className={styles.removeItem}>×</button>
                    </div>
                ))}
            </div>
            <button type="button" onClick={addItem} className={styles.addItem}>+ Add item</button>
        </div>
    )
}

const QuoteBlock = ({ block, onChange }) => {
    const contentRef = useRef(null)
    const initializedRef = useRef(false)

    useEffect(() => {
        if (contentRef.current && !initializedRef.current) {
            contentRef.current.innerHTML = block.content
            initializedRef.current = true
        }
    }, [])

    useEffect(() => {
        if (contentRef.current && initializedRef.current) {
            if (document.activeElement !== contentRef.current) {
                contentRef.current.innerHTML = block.content
            }
        }
    }, [block.content])

    const handleBlur = () => {
        if (contentRef.current) {
            const newContent = contentRef.current.innerHTML
            if (newContent !== block.content) {
                onChange({ ...block, content: newContent })
            }
        }
    }

    return (
        <div className={styles.quoteBlock}>
            <div
                ref={contentRef}
                className={styles.blockContent}
                contentEditable
                suppressContentEditableWarning
                onBlur={handleBlur}
                data-placeholder="Enter quote..."
            />
        </div>
    )
}

const CodeBlock = ({ block, onChange }) => (
    <div className={styles.codeBlock}>
        <textarea
            value={block.content}
            onChange={(e) => onChange({ ...block, content: e.target.value })}
            placeholder="Enter code..."
            spellCheck={false}
        />
    </div>
)

const DividerBlock = () => (
    <div className={styles.dividerBlock}>
        <hr />
    </div>
)

const VideoBlock = ({ block, onChange }) => {
    const getEmbedUrl = (url) => {
        // Simple regex for YouTube/Vimeo
        const ytMatch = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^&]+)/)
        if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`

        const vimeoMatch = url.match(/vimeo\.com\/(\d+)/)
        if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`

        return url
    }

    const handleUrlChange = (e) => {
        const url = e.target.value
        const embedUrl = getEmbedUrl(url)
        onChange({ ...block, url, embedUrl })
    }

    return (
        <div className={styles.videoBlock}>
            {block.embedUrl ? (
                <div className={styles.videoPreview}>
                    <iframe
                        src={block.embedUrl}
                        title="Video Preview"
                        allowFullScreen
                    />
                    <button
                        type="button"
                        className={styles.changeVideoBtn}
                        onClick={() => onChange({ ...block, url: '', embedUrl: '' })}
                    >
                        Change Video
                    </button>
                </div>
            ) : (
                <div className={styles.videoInputWrapper}>
                    <Video size={20} className={styles.menuIcon} />
                    <div style={{ flex: 1 }}>
                        <input
                            type="text"
                            className={styles.videoInput}
                            placeholder="Paste YouTube or Vimeo URL..."
                            value={block.url || ''}
                            onChange={handleUrlChange}
                        />
                        <div className={styles.videoHelper}>
                            Supports YouTube and Vimeo URLs
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// Block wrapper with drag handle and delete button
const Block = ({ block, index, onChange, onDelete, onImageUpload, isDragging }) => {
    const BlockComponent = {
        paragraph: ParagraphBlock,
        heading: HeadingBlock,
        image: ImageBlock,
        list: ListBlock,
        quote: QuoteBlock,
        code: CodeBlock,
        divider: DividerBlock,
        video: VideoBlock,
    }[block.type]

    const BlockIcon = BLOCK_TYPES[block.type]?.icon || Type

    return (
        <div className={`${styles.block} ${isDragging ? styles.dragging : ''}`}>
            <div className={styles.blockSidebar}>
                <div className={styles.dragHandle}>
                    <GripVertical size={16} />
                </div>
                <div className={styles.blockType}>
                    <BlockIcon size={14} />
                </div>
                <button type="button" onClick={onDelete} className={styles.deleteBlock}>
                    <Trash2 size={14} />
                </button>
            </div>
            <div className={styles.blockMain}>
                <BlockComponent
                    block={block}
                    onChange={onChange}
                    onImageUpload={onImageUpload}
                />
            </div>
        </div>
    )
}

// Add block menu
const AddBlockMenu = ({ onAdd, show, onClose }) => {
    if (!show) return null

    return (
        <div className={styles.addBlockMenu}>
            {Object.entries(BLOCK_TYPES).map(([type, { icon: Icon, label }]) => (
                <button
                    type="button"
                    key={type}
                    onClick={() => { onAdd(type); onClose(); }}
                    className={styles.addBlockOption}
                >
                    <Icon size={18} />
                    <span>{label}</span>
                </button>
            ))}
        </div>
    )
}

// Preview Modal Component
const PreviewModal = ({ html, onClose }) => {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleEscape)
        document.body.style.overflow = 'hidden'
        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = ''
        }
    }, [onClose])

    const handleContentClick = (e) => {
        const link = e.target.closest('a')
        if (link) {
            console.log('Preview link clicked:', link.href)
            // Force open in new tab
            e.preventDefault()
            e.stopPropagation()
            window.open(link.href, '_blank', 'noopener,noreferrer')
        }
    }

    return (
        <div className={styles.previewOverlay} onClick={onClose}>
            <div className={styles.previewModal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.previewHeader}>
                    <h2>Post Preview</h2>
                    <button type="button" onClick={onClose} className={styles.previewCloseBtn}>
                        <X size={20} />
                    </button>
                </div>
                <div
                    className={styles.previewContent}
                    onClick={handleContentClick}
                >
                    <article
                        className={styles.previewArticle}
                        dangerouslySetInnerHTML={{ __html: html }}
                    />
                </div>
            </div>
        </div>
    )
}

// Context Menu Component
const MENU_ITEMS = [
    {
        id: 'format',
        label: 'Format',
        icon: <Type size={16} />,
        children: [
            { id: 'bold', label: 'Bold', icon: <Bold size={16} /> },
            { id: 'italic', label: 'Italic', icon: <Italic size={16} /> },
            { id: 'underline', label: 'Underline', icon: <Underline size={16} /> },
            { id: 'strikeThrough', label: 'Strikethrough', icon: <Strikethrough size={16} /> },
            { id: 'subscript', label: 'Subscript', icon: <Subscript size={16} /> },
            { id: 'superscript', label: 'Superscript', icon: <Superscript size={16} /> },
            { id: 'code', label: 'Code', icon: <Code size={16} /> },
            { id: 'removeFormat', label: 'Clear Formatting', icon: <Eraser size={16} /> }
        ]
    },
    {
        id: 'fontSize',
        label: 'Font Size',
        icon: <Text size={16} />,
        children: [
            { id: '8px', label: 'Small', value: '8px' },
            { id: '12px', label: 'Normal', value: '12px' },
            { id: '16px', label: 'Large', value: '16px' },
            { id: '24px', label: 'Huge', value: '24px' },
            { id: 'custom', label: 'Custom', type: 'input', placeholder: 'e.g. 14px', inputType: 'text' }
        ]
    },
    {
        id: 'color',
        label: 'Text Color',
        icon: <Palette size={16} />,
        type: 'color-picker'
    },
    {
        id: 'backColor',
        label: 'Highlight',
        icon: <Highlighter size={16} />,
        type: 'color-picker'
    },
    {
        id: 'createLink',
        label: 'Link',
        icon: <LinkIcon size={16} />,
        type: 'input',
        placeholder: 'Paste URL...'
    },
    {
        id: 'fontFamily',
        label: 'Font',
        icon: <Type size={16} />,
        children: [
            // Trending Sans-Serif (Blog favorites)
            { id: 'inter', label: 'Inter', value: 'Inter, sans-serif' },
            { id: 'roboto', label: 'Roboto', value: 'Roboto, sans-serif' },
            { id: 'opensans', label: 'Open Sans', value: 'Open Sans, sans-serif' },
            { id: 'lato', label: 'Lato', value: 'Lato, sans-serif' },
            { id: 'poppins', label: 'Poppins', value: 'Poppins, sans-serif' },
            { id: 'montserrat', label: 'Montserrat', value: 'Montserrat, sans-serif' },
            { id: 'nunito', label: 'Nunito', value: 'Nunito, sans-serif' },
            { id: 'raleway', label: 'Raleway', value: 'Raleway, sans-serif' },
            { id: 'sourcesans', label: 'Source Sans Pro', value: 'Source Sans Pro, sans-serif' },
            { id: 'worksans', label: 'Work Sans', value: 'Work Sans, sans-serif' },
            // Classic Web-Safe
            { id: 'arial', label: 'Arial', value: 'Arial, sans-serif' },
            { id: 'verdana', label: 'Verdana', value: 'Verdana, sans-serif' },
            // Serif
            { id: 'playfair', label: 'Playfair Display', value: 'Playfair Display, serif' },
            { id: 'merriweather', label: 'Merriweather', value: 'Merriweather, serif' },
            { id: 'lora', label: 'Lora', value: 'Lora, serif' },
            { id: 'georgia', label: 'Georgia', value: 'Georgia, serif' },
            // Monospace
            { id: 'firacode', label: 'Fira Code', value: 'Fira Code, monospace' },
            { id: 'jetbrains', label: 'JetBrains Mono', value: 'JetBrains Mono, monospace' },
            { id: 'consolas', label: 'Consolas', value: 'Consolas, monospace' }
        ]
    },
    {
        id: 'indent',
        label: 'Indent',
        icon: <Indent size={16} />,
        action: 'indent'
    },
    {
        id: 'outdent',
        label: 'Outdent',
        icon: <Outdent size={16} />,
        action: 'outdent'
    },
    {
        id: 'align',
        label: 'Align',
        icon: <AlignLeft size={16} />,
        children: [
            { id: 'left', label: 'Left', icon: <AlignLeft size={16} /> },
            { id: 'center', label: 'Center', icon: <AlignCenter size={16} /> },
            { id: 'right', label: 'Right', icon: <AlignRight size={16} /> }
        ]
    }
]

const ContextMenu = ({ x, y, onAction }) => {
    // Prevent menu from closing when clicking inside
    const handleMouseDown = (e) => {
        e.stopPropagation()
    }

    return (
        <div
            data-context-menu
            className={styles.contextMenu}
            style={{ top: y, left: x }}
            onMouseDown={handleMouseDown}
        >
            {MENU_ITEMS.map((item, index) => (
                <div key={index} className={styles.menuGroup}>
                    {item.children ? (
                        <div className={styles.submenuWrapper}>
                            <button type="button" className={styles.menuItem}>
                                {item.icon}
                                <span>{item.label}</span>
                                <ChevronRight size={14} className={styles.chevron} />
                            </button>
                            <div className={styles.submenu}>
                                {item.children.map((child, childIndex) => {
                                    if (child.type === 'input') {
                                        return (
                                            <div key={childIndex} className={styles.menuInputWrapper} onClick={(e) => e.stopPropagation()}>
                                                <input
                                                    type={child.inputType || 'text'}
                                                    placeholder={child.placeholder || child.label}
                                                    className={styles.menuInput}
                                                    onKeyDown={(e) => {
                                                        if (e.key === 'Enter') {
                                                            e.preventDefault()
                                                            e.stopPropagation()
                                                            onAction(item.id, e.target.value)
                                                        }
                                                    }}
                                                    onClick={(e) => e.stopPropagation()}
                                                />
                                            </div>
                                        )
                                    }
                                    if (child.type === 'color-picker') {
                                        return (
                                            <div key={childIndex} className={styles.menuItem}>
                                                {child.icon}
                                                <span>{child.label}</span>
                                                <input
                                                    type="color"
                                                    className={styles.colorPickerInput}
                                                    onChange={(e) => onAction(child.id, e.target.value)}
                                                    onClick={(e) => e.stopPropagation()}
                                                    style={{ marginLeft: 'auto', cursor: 'pointer' }}
                                                />
                                            </div>
                                        )
                                    }
                                    // Default button item
                                    return (
                                        <button
                                            type="button"
                                            key={childIndex}
                                            className={styles.menuItem}
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                onAction(item.id === 'format' ? 'format' : item.id, child.id)
                                            }}
                                        >
                                            {child.icon}
                                            <span>{child.label}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    ) : item.type === 'input' ? (
                        <div key={index} className={styles.menuInputWrapper} onClick={(e) => e.stopPropagation()}>
                            <input
                                type={item.inputType || 'text'}
                                placeholder={item.placeholder || item.label}
                                className={styles.menuInput}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        onAction(item.id, e.target.value)
                                    }
                                }}
                                onClick={(e) => e.stopPropagation()}
                            />
                        </div>
                    ) : item.type === 'color-picker' ? (
                        <div key={index} className={styles.menuItem} onClick={(e) => e.stopPropagation()}>
                            {item.icon}
                            <span>{item.label}</span>
                            <input
                                type="color"
                                className={styles.colorPickerInput}
                                onChange={(e) => onAction(item.id, e.target.value)}
                                style={{ marginLeft: 'auto', cursor: 'pointer' }}
                            />
                        </div>
                    ) : (
                        <button
                            type="button"
                            key={index}
                            className={styles.menuItem}
                            onClick={() => onAction(item.action, item.value)}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}

// Toolbar Component for Header
const Toolbar = ({ onAction, onAddBlock, onSaveSelection, activeStyles = {} }) => {
    const [showFontMenu, setShowFontMenu] = useState(false)
    const [showSizeMenu, setShowSizeMenu] = useState(false)
    const [showAlignMenu, setShowAlignMenu] = useState(false)
    const [showHighlightMenu, setShowHighlightMenu] = useState(false)
    const [customSize, setCustomSize] = useState('')

    // Save selection when toolbar is clicked (before focus is lost)
    const handleMouseDown = (e) => {
        // Don't save if clicking on an input
        if (e.target.tagName === 'INPUT') return
        if (onSaveSelection) onSaveSelection()
    }

    const fonts = [
        // Trending Sans-Serif (Blog favorites)
        { id: 'inter', label: 'Inter', value: 'Inter, sans-serif' },
        { id: 'roboto', label: 'Roboto', value: 'Roboto, sans-serif' },
        { id: 'opensans', label: 'Open Sans', value: 'Open Sans, sans-serif' },
        { id: 'lato', label: 'Lato', value: 'Lato, sans-serif' },
        { id: 'poppins', label: 'Poppins', value: 'Poppins, sans-serif' },
        { id: 'montserrat', label: 'Montserrat', value: 'Montserrat, sans-serif' },
        { id: 'nunito', label: 'Nunito', value: 'Nunito, sans-serif' },
        { id: 'raleway', label: 'Raleway', value: 'Raleway, sans-serif' },
        { id: 'sourcesans', label: 'Source Sans Pro', value: 'Source Sans Pro, sans-serif' },
        { id: 'worksans', label: 'Work Sans', value: 'Work Sans, sans-serif' },
        // Classic Web-Safe
        { id: 'arial', label: 'Arial', value: 'Arial, sans-serif' },
        { id: 'verdana', label: 'Verdana', value: 'Verdana, sans-serif' },
        // Serif
        { id: 'playfair', label: 'Playfair Display', value: 'Playfair Display, serif' },
        { id: 'merriweather', label: 'Merriweather', value: 'Merriweather, serif' },
        { id: 'lora', label: 'Lora', value: 'Lora, serif' },
        { id: 'georgia', label: 'Georgia', value: 'Georgia, serif' },
        // Monospace
        { id: 'firacode', label: 'Fira Code', value: 'Fira Code, monospace' },
        { id: 'jetbrains', label: 'JetBrains Mono', value: 'JetBrains Mono, monospace' },
        { id: 'consolas', label: 'Consolas', value: 'Consolas, monospace' }
    ]

    const sizes = [
        { label: '8px', value: '8px' },
        { label: '10px', value: '10px' },
        { label: '12px', value: '12px' },
        { label: '14px', value: '14px' },
        { label: '16px', value: '16px' },
        { label: '18px', value: '18px' },
        { label: '20px', value: '20px' },
        { label: '24px', value: '24px' },
        { label: '28px', value: '28px' },
        { label: '32px', value: '32px' },
        { label: '36px', value: '36px' },
        { label: '48px', value: '48px' }
    ]

    return (
        <div className={styles.toolbar} onMouseDown={handleMouseDown}>
            {/* Format Buttons */}
            <div className={styles.toolbarGroup}>
                <button type="button" className={`${styles.toolbarBtn} ${activeStyles.bold ? styles.toolbarBtnActive : ''}`} onClick={() => onAction('format', 'bold')} title="Bold">
                    <Bold size={16} />
                </button>
                <button type="button" className={`${styles.toolbarBtn} ${activeStyles.italic ? styles.toolbarBtnActive : ''}`} onClick={() => onAction('format', 'italic')} title="Italic">
                    <Italic size={16} />
                </button>
                <button type="button" className={`${styles.toolbarBtn} ${activeStyles.underline ? styles.toolbarBtnActive : ''}`} onClick={() => onAction('format', 'underline')} title="Underline">
                    <Underline size={16} />
                </button>
                <button type="button" className={`${styles.toolbarBtn} ${activeStyles.strikeThrough ? styles.toolbarBtnActive : ''}`} onClick={() => onAction('format', 'strikeThrough')} title="Strikethrough">
                    <Strikethrough size={16} />
                </button>
                <button type="button" className={`${styles.toolbarBtn} ${activeStyles.subscript ? styles.toolbarBtnActive : ''}`} onClick={() => onAction('format', 'subscript')} title="Subscript">
                    <Subscript size={16} />
                </button>
                <button type="button" className={`${styles.toolbarBtn} ${activeStyles.superscript ? styles.toolbarBtnActive : ''}`} onClick={() => onAction('format', 'superscript')} title="Superscript">
                    <Superscript size={16} />
                </button>
                <button type="button" className={styles.toolbarBtn} onClick={() => onAction('format', 'code')} title="Code">
                    <Code size={16} />
                </button>
                <button type="button" className={styles.toolbarBtn} onClick={() => onAction('format', 'removeFormat')} title="Clear Formatting">
                    <Eraser size={16} />
                </button>
            </div>

            <div className={styles.toolbarDivider} />

            {/* Font Family Dropdown */}
            <div className={styles.toolbarDropdown}>
                <button type="button" className={styles.toolbarBtn} onClick={() => setShowFontMenu(!showFontMenu)} title="Font Family">
                    <Type size={16} />
                    <ChevronRight size={12} style={{ transform: 'rotate(90deg)' }} />
                </button>
                {showFontMenu && (
                    <div className={styles.toolbarMenu} onMouseDown={() => onSaveSelection && onSaveSelection()}>
                        {fonts.map(font => (
                            <button
                                type="button"
                                key={font.id}
                                className={styles.toolbarMenuItem}
                                onClick={() => { onAction('fontFamily', font.value); setShowFontMenu(false) }}
                                style={{ fontFamily: font.value }}
                            >
                                {font.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Font Size Dropdown */}
            <div className={styles.toolbarDropdown}>
                <button type="button" className={styles.toolbarBtn} onClick={() => setShowSizeMenu(!showSizeMenu)} title="Font Size">
                    <Text size={16} />
                    <ChevronRight size={12} style={{ transform: 'rotate(90deg)' }} />
                </button>
                {showSizeMenu && (
                    <div className={styles.toolbarMenu} onMouseDown={() => onSaveSelection && onSaveSelection()}>
                        {sizes.map(size => (
                            <button
                                type="button"
                                key={size.value}
                                className={styles.toolbarMenuItem}
                                onClick={() => { onAction('fontSize', size.value); setShowSizeMenu(false) }}
                            >
                                {size.label}
                            </button>
                        ))}
                        <div className={styles.toolbarMenuDivider} />
                        <div className={styles.toolbarMenuInput}>
                            <input
                                type="text"
                                placeholder="Custom (e.g. 22px)"
                                value={customSize}
                                onChange={(e) => setCustomSize(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && customSize) {
                                        onAction('fontSize', customSize.includes('px') ? customSize : customSize + 'px')
                                        setCustomSize('')
                                        setShowSizeMenu(false)
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>

            <div className={styles.toolbarDivider} />

            {/* Text Color */}
            <div className={styles.toolbarGroup}>
                <label className={styles.toolbarColorBtn} title="Text Color" onMouseDown={() => onSaveSelection && onSaveSelection()}>
                    <Palette size={16} />
                    <input
                        type="color"
                        className={styles.hiddenColorInput}
                        onChange={(e) => onAction('color', e.target.value)}
                    />
                </label>
            </div>

            {/* Highlight Color Dropdown */}
            <div className={styles.toolbarDropdown}>
                <button type="button" className={styles.toolbarBtn} onClick={() => setShowHighlightMenu && setShowHighlightMenu(!showHighlightMenu)} title="Highlight Color">
                    <Highlighter size={16} />
                    <ChevronRight size={12} style={{ transform: 'rotate(90deg)' }} />
                </button>
                {showHighlightMenu && (
                    <div className={styles.toolbarMenu} onMouseDown={() => onSaveSelection && onSaveSelection()}>
                        <div className={styles.highlightColors}>
                            {[
                                { color: '#fef08a', label: 'Yellow' },
                                { color: '#bbf7d0', label: 'Green' },
                                { color: '#bfdbfe', label: 'Blue' },
                                { color: '#fbcfe8', label: 'Pink' },
                                { color: '#fed7aa', label: 'Orange' },
                                { color: '#a5f3fc', label: 'Cyan' },
                                { color: '#e9d5ff', label: 'Lavender' },
                                { color: '#fecaca', label: 'Red' },
                            ].map(item => (
                                <button
                                    key={item.color}
                                    type="button"
                                    className={styles.highlightColorBtn}
                                    style={{ backgroundColor: item.color }}
                                    title={item.label}
                                    onClick={() => { onAction('backColor', item.color); setShowHighlightMenu(false) }}
                                />
                            ))}
                        </div>
                        <div className={styles.toolbarMenuDivider} />
                        <label className={styles.toolbarMenuItem} style={{ cursor: 'pointer' }}>
                            <Palette size={14} /> Custom Color
                            <input
                                type="color"
                                className={styles.hiddenColorInput}
                                onChange={(e) => { onAction('backColor', e.target.value); setShowHighlightMenu(false) }}
                            />
                        </label>
                        <button
                            type="button"
                            className={styles.toolbarMenuItem}
                            onClick={() => { onAction('backColor', 'transparent'); setShowHighlightMenu(false) }}
                        >
                            <Eraser size={14} /> Remove Highlight
                        </button>
                    </div>
                )}
            </div>

            <div className={styles.toolbarDivider} />

            {/* Alignment Dropdown */}
            <div className={styles.toolbarDropdown}>
                <button type="button" className={`${styles.toolbarBtn} ${(activeStyles.justifyLeft || activeStyles.justifyCenter || activeStyles.justifyRight || activeStyles.justifyFull) ? styles.toolbarBtnActive : ''}`} onClick={() => setShowAlignMenu(!showAlignMenu)} title="Align">
                    <AlignLeft size={16} />
                    <ChevronRight size={12} style={{ transform: 'rotate(90deg)' }} />
                </button>
                {showAlignMenu && (
                    <div className={styles.toolbarMenu} onMouseDown={() => onSaveSelection && onSaveSelection()}>
                        <button type="button" className={`${styles.toolbarMenuItem} ${activeStyles.justifyLeft ? styles.toolbarMenuItemActive : ''}`} onClick={() => { onAction('align', 'left'); setShowAlignMenu(false) }}>
                            <AlignLeft size={14} /> Left
                        </button>
                        <button type="button" className={`${styles.toolbarMenuItem} ${activeStyles.justifyCenter ? styles.toolbarMenuItemActive : ''}`} onClick={() => { onAction('align', 'center'); setShowAlignMenu(false) }}>
                            <AlignCenter size={14} /> Center
                        </button>
                        <button type="button" className={`${styles.toolbarMenuItem} ${activeStyles.justifyRight ? styles.toolbarMenuItemActive : ''}`} onClick={() => { onAction('align', 'right'); setShowAlignMenu(false) }}>
                            <AlignRight size={14} /> Right
                        </button>
                        <button type="button" className={`${styles.toolbarMenuItem} ${activeStyles.justifyFull ? styles.toolbarMenuItemActive : ''}`} onClick={() => { onAction('align', 'justify'); setShowAlignMenu(false) }}>
                            <AlignJustify size={14} /> Justify
                        </button>
                    </div>
                )}
            </div>

            {/* Indent/Outdent */}
            <div className={styles.toolbarGroup}>
                <button type="button" className={styles.toolbarBtn} onClick={() => onAction('indent')} title="Indent">
                    <Indent size={16} />
                </button>
                <button type="button" className={styles.toolbarBtn} onClick={() => onAction('outdent')} title="Outdent">
                    <Outdent size={16} />
                </button>
            </div>

            <div className={styles.toolbarDivider} />

            {/* Lists */}
            <div className={styles.toolbarGroup}>
                <button type="button" className={`${styles.toolbarBtn} ${activeStyles.insertUnorderedList ? styles.toolbarBtnActive : ''}`} onClick={() => onAction('insertUnorderedList')} title="Bullet List">
                    <List size={16} />
                </button>
                <button type="button" className={`${styles.toolbarBtn} ${activeStyles.insertOrderedList ? styles.toolbarBtnActive : ''}`} onClick={() => onAction('insertOrderedList')} title="Numbered List">
                    <ListOrdered size={16} />
                </button>
            </div>

            <div className={styles.toolbarDivider} />

            {/* Link */}
            <button type="button" className={`${styles.toolbarBtn} ${activeStyles.link ? styles.toolbarBtnActive : ''}`} onMouseDown={() => onSaveSelection && onSaveSelection()} onClick={() => {
                // Selection is already saved from onMouseDown
                const url = prompt('Enter URL:')
                if (url) onAction('createLink', url)
            }} title="Insert Link">
                <LinkIcon size={16} />
            </button>

            <div className={styles.toolbarDivider} />

            {/* Block Insert Tools */}
            <div className={styles.toolbarGroup}>
                <label className={styles.toolbarColorBtn} title="Insert Image">
                    <Image size={16} />
                    <input
                        type="file"
                        accept="image/*"
                        className={styles.hiddenColorInput}
                        onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) onAddBlock('image', file)
                            e.target.value = '' // Reset for re-upload
                        }}
                    />
                </label>
                <button type="button" className={styles.toolbarBtn} onClick={() => onAddBlock('video')} title="Insert Video">
                    <Video size={16} />
                </button>
                <button type="button" className={styles.toolbarBtn} onClick={() => onAddBlock('divider')} title="Insert Divider">
                    <Minus size={16} />
                </button>
                <button type="button" className={styles.toolbarBtn} onClick={() => onAddBlock('quote')} title="Insert Quote">
                    <Quote size={16} />
                </button>
                <button type="button" className={styles.toolbarBtn} onClick={() => onAddBlock('code')} title="Insert Code Block">
                    <Code size={16} />
                </button>
                <button type="button" className={styles.toolbarBtn} onClick={() => onAddBlock('list')} title="Insert List">
                    <List size={16} />
                </button>
            </div>
        </div>
    )
}

// Main BlockEditor Component
export default function BlockEditor({ value, onChange, name, onImageUpload }) {
    const [blocks, setBlocks] = useState(() => htmlToBlocks(value))
    const [showAddMenu, setShowAddMenu] = useState(false)
    const [addMenuIndex, setAddMenuIndex] = useState(null)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showPreview, setShowPreview] = useState(false)
    const [editorHeight, setEditorHeight] = useState(400)
    const [editorWidth, setEditorWidth] = useState('100%')
    const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 })
    const [activeStyles, setActiveStyles] = useState({})
    const savedRangeRef = useRef(null)

    // Detect active styles on selection change
    const detectActiveStyles = useCallback(() => {
        const sel = window.getSelection()
        // Only show active styles when there's an actual text selection (not just cursor)
        if (!sel || sel.isCollapsed || sel.toString().trim() === '') {
            setActiveStyles({})
            return
        }

        // Check if selection contains a link
        let hasLink = false
        if (sel.rangeCount > 0) {
            let node = sel.getRangeAt(0).commonAncestorContainer
            if (node.nodeType === 3) node = node.parentElement
            while (node) {
                if (node.tagName === 'A') {
                    hasLink = true
                    break
                }
                node = node.parentElement
            }
        }

        const styles = {
            bold: document.queryCommandState('bold'),
            italic: document.queryCommandState('italic'),
            underline: document.queryCommandState('underline'),
            strikeThrough: document.queryCommandState('strikeThrough'),
            subscript: document.queryCommandState('subscript'),
            superscript: document.queryCommandState('superscript'),
            justifyLeft: document.queryCommandState('justifyLeft'),
            justifyCenter: document.queryCommandState('justifyCenter'),
            justifyRight: document.queryCommandState('justifyRight'),
            justifyFull: document.queryCommandState('justifyFull'),
            insertOrderedList: document.queryCommandState('insertOrderedList'),
            insertUnorderedList: document.queryCommandState('insertUnorderedList'),
            link: hasLink,
        }
        setActiveStyles(styles)
    }, [])

    // Listen for selection changes
    useEffect(() => {
        const handleSelectionChange = () => {
            detectActiveStyles()
        }
        document.addEventListener('selectionchange', handleSelectionChange)
        return () => document.removeEventListener('selectionchange', handleSelectionChange)
    }, [detectActiveStyles])

    // Sync HTML value to parent
    useEffect(() => {
        const html = blocksToHtml(blocks)
        console.log('BlockEditor Syncing:', html)
        onChange({ target: { name, value: html } })
    }, [blocks, name])

    // Parse initial value
    useEffect(() => {
        if (value && blocks.length === 1 && !blocks[0].content) {
            setBlocks(htmlToBlocks(value))
        }
    }, [value])

    // Close context menu on click and cleanup marker
    useEffect(() => {
        const handleClick = (e) => {
            if (e.target.closest('[data-context-menu]')) return

            // Revert marker if it exists (Cancel action)
            const marker = document.getElementById('temp-ctx-selection')
            if (marker) {
                const parent = marker.parentNode
                while (marker.firstChild) parent.insertBefore(marker.firstChild, marker)
                parent.removeChild(marker)
            }

            setContextMenu(prev => ({ ...prev, visible: false }))
        }
        document.addEventListener('mousedown', handleClick)
        document.addEventListener('click', handleClick)
        return () => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('click', handleClick)
        }
    }, [])

    // Handle Ctrl+Click on links
    useEffect(() => {
        const handleLinkClick = (e) => {
            const link = e.target.closest('a')
            if (link && (e.ctrlKey || e.metaKey)) {
                e.preventDefault()
                e.stopPropagation()
                window.open(link.href, '_blank')
            }
        }

        // Use capture to ensure we catch it before contentEditable swallows it
        document.addEventListener('click', handleLinkClick, true)
        return () => document.removeEventListener('click', handleLinkClick, true)
    }, [])

    const toggleFullscreen = () => setIsFullscreen(!isFullscreen)

    const handleContextMenu = useCallback((e) => {
        const selection = window.getSelection()
        if (!selection.isCollapsed && typeof selection.toString() === 'string' && selection.toString().length > 0) {
            e.preventDefault()

            // Marker Span Strategy: Wrap immediately to persist selection during input focus
            try {
                const range = selection.getRangeAt(0)
                const span = document.createElement('span')
                span.id = 'temp-ctx-selection'
                span.style.backgroundColor = '#e2e8f0' // Visual feedback
                range.surroundContents(span)

                setContextMenu({
                    visible: true,
                    x: e.clientX,
                    y: e.clientY
                })
            } catch (err) {
                console.error('Failed to wrap selection:', err)
            }
        }
    }, [])

    const handleAction = (action, value) => {
        const marker = document.getElementById('temp-ctx-selection')
        let activeSpanId = null

        // Find block element for blur/focus sync
        // Find block element via marker or range fallback
        let targetBlockElement = null
        if (marker) {
            let current = marker
            while (current && !current.className?.includes?.('blockContent')) {
                current = current.parentElement
                if (!current) break;
            }
            targetBlockElement = current
        } else if (savedRangeRef.current) {
            let current = savedRangeRef.current.commonAncestorContainer
            if (current.nodeType === 3) current = current.parentElement
            while (current && !current.className.includes('blockContent')) {
                current = current.parentElement
                if (!current) break;
                if (current.className && typeof current.className === 'string' && current.className.includes('blockWrapper')) break;
            }
            targetBlockElement = current
        }

        if (action === 'indent' || action === 'outdent') {
            document.execCommand(action, false, null)
            return
        }

        if (action === 'fontFamily') {
            document.execCommand('fontName', false, value)
            return
        }

        if (action === 'insertOrderedList' || action === 'insertUnorderedList') {
            // Restore selection if needed
            if (savedRangeRef.current) {
                const sel = window.getSelection()
                sel.removeAllRanges()
                sel.addRange(savedRangeRef.current)
            }
            document.execCommand(action, false, null)
            return
        }

        if (action === 'align') {
            if (marker) {
                // Validate and Unwrap first to avoid saving the bg color
                const parent = marker.parentNode
                const firstChild = marker.firstChild
                const lastChild = marker.lastChild

                // Move children out
                while (marker.firstChild) parent.insertBefore(marker.firstChild, marker)
                parent.removeChild(marker)

                // Select the content so execCommand works on the block
                if (firstChild && lastChild) {
                    const sel = window.getSelection()
                    const r = document.createRange()
                    r.setStartBefore(firstChild)
                    r.setEndAfter(lastChild)
                    sel.removeAllRanges()
                    sel.addRange(r)
                }
            } else if (savedRangeRef.current) {
                const sel = window.getSelection()
                sel.removeAllRanges()
                sel.addRange(savedRangeRef.current)
            }
            document.execCommand(action === 'align' ? `justify${value.charAt(0).toUpperCase() + value.slice(1)}` : action, false, value)
        } else if (action === 'fontSize') {
            try {
                let size = value
                if (!size.endsWith('px') && !isNaN(size)) size += 'px'

                // Restore selection first
                if (marker) {
                    const sel = window.getSelection()
                    const r = document.createRange()
                    r.selectNodeContents(marker)
                    sel.removeAllRanges()
                    sel.addRange(r)

                    // Apply font size using a span wrapper
                    const contents = r.extractContents()
                    const span = document.createElement('span')
                    span.style.fontSize = size
                    span.appendChild(contents)
                    r.insertNode(span)

                    // Cleanup marker
                    if (marker.parentNode) {
                        while (marker.firstChild) marker.parentNode.insertBefore(marker.firstChild, marker)
                        marker.parentNode.removeChild(marker)
                    }
                } else if (savedRangeRef.current) {
                    const sel = window.getSelection()
                    sel.removeAllRanges()
                    sel.addRange(savedRangeRef.current)

                    const range = savedRangeRef.current
                    const contents = range.extractContents()
                    const span = document.createElement('span')
                    span.style.fontSize = size
                    span.appendChild(contents)
                    range.insertNode(span)
                }

            } catch (e) {
                console.error('Failed to apply font size:', e)
            }
        } else if (action === 'createLink') {
            try {
                if (marker) {
                    // 1. Select the marker content
                    const sel = window.getSelection()
                    const r = document.createRange()
                    r.selectNodeContents(marker)
                    sel.removeAllRanges()
                    sel.addRange(r)

                    // 2. Create Link (browser wraps text in <a> inside the marker)
                    document.execCommand('createLink', false, value)

                    // 2.5 Find and configure the link
                    const links = marker.getElementsByTagName('a')
                    if (links.length > 0) {
                        for (let link of links) {
                            link.target = '_blank'
                            link.rel = 'noopener noreferrer'
                            link.title = 'Ctrl+Click to open'
                        }
                    }

                    // 3. Unwrap marker (keep the new link)
                    const parent = marker.parentNode
                    while (marker.firstChild) parent.insertBefore(marker.firstChild, marker)
                    parent.removeChild(marker)
                } else if (savedRangeRef.current) {
                    const sel = window.getSelection()
                    sel.removeAllRanges()
                    sel.addRange(savedRangeRef.current)
                    document.execCommand('createLink', false, value)

                    // Configure the created link
                    const range = savedRangeRef.current
                    let container = range.commonAncestorContainer
                    if (container.nodeType === 3) container = container.parentElement
                    const links = container.querySelectorAll('a')
                    links.forEach(link => {
                        if (link.href === value || link.href === value + '/') {
                            link.target = '_blank'
                            link.rel = 'noopener noreferrer'
                            link.title = 'Ctrl+Click to open'
                        }
                    })
                }
            } catch (e) {
                console.error('Failed to create link:', e)
            }
        } else if (action === 'format' || action === 'color' || action === 'backColor') {
            if (marker) {
                const sel = window.getSelection()
                const r = document.createRange()
                r.selectNodeContents(marker)
                sel.removeAllRanges()
                sel.addRange(r)
            } else if (savedRangeRef.current) {
                const sel = window.getSelection()
                sel.removeAllRanges()
                sel.addRange(savedRangeRef.current)
            }

            if (action === 'format') {
                if (value === 'code') {
                    document.execCommand('fontName', false, 'monospace')
                    document.execCommand('backColor', false, '#f3f4f6')
                } else {
                    document.execCommand(value)
                }
            }
            else if (action === 'color') document.execCommand('foreColor', false, value)
            else if (action === 'backColor') document.execCommand('backColor', false, value)
        }

        if (targetBlockElement) {
            // Force focus -> blur -> focus cycle to trigger React state save
            // This ensures the DOM changes are persisted to 'blocks' state
            targetBlockElement.focus()
            targetBlockElement.blur()
            targetBlockElement.focus()

            // Cleanup marker if still exists (finalize)
            const leftover = document.getElementById('temp-ctx-selection')
            if (leftover) {
                leftover.style.backgroundColor = ''
                leftover.removeAttribute('id')
            }

            if (targetBlockElement) {
                targetBlockElement.focus()
                targetBlockElement.blur()
                targetBlockElement.focus()
            }
        }

        setContextMenu(prev => ({ ...prev, visible: false }))
    }

    const handleDragEnd = useCallback((result) => {
        if (!result.destination) return

        const newBlocks = Array.from(blocks)
        const [removed] = newBlocks.splice(result.source.index, 1)
        newBlocks.splice(result.destination.index, 0, removed)
        setBlocks(newBlocks)
    }, [blocks])

    const addBlock = useCallback((type, index = blocks.length) => {
        const newBlocks = [...blocks]
        newBlocks.splice(index, 0, createBlock(type))
        setBlocks(newBlocks)
    }, [blocks])

    const updateBlock = useCallback((index, updatedBlock) => {
        const newBlocks = [...blocks]
        newBlocks[index] = updatedBlock
        setBlocks(newBlocks)
    }, [blocks])

    const deleteBlock = useCallback((index) => {
        if (blocks.length > 1) {
            setBlocks(blocks.filter((_, i) => i !== index))
        }
    }, [blocks])

    // Handle block insertion from toolbar
    const handleAddBlock = useCallback(async (type, file = null) => {
        const newBlock = createBlock(type)

        if (type === 'image' && file && onImageUpload) {
            try {
                const url = await onImageUpload(file)
                if (url) {
                    newBlock.url = url
                    newBlock.content = url
                    newBlock.alt = file.name
                }
            } catch (error) {
                console.error('Image upload failed:', error)
                return
            }
        }

        setBlocks(prev => [...prev, newBlock])
    }, [onImageUpload])

    const handleEditorResizeStart = (e, direction) => {
        e.preventDefault()
        e.stopPropagation()
        const startX = e.clientX
        const startY = e.clientY
        const startWidth = e.target.parentElement.offsetWidth
        const startHeight = editorHeight

        const handleMouseMove = (moveEvent) => {
            if (direction === 'bottom') {
                const newHeight = Math.max(200, startHeight + (moveEvent.clientY - startY))
                setEditorHeight(newHeight)
            } else if (direction === 'right') {
                const newWidth = Math.max(300, startWidth + (moveEvent.clientX - startX))
                setEditorWidth(newWidth)
            } else if (direction === 'corner') {
                const newHeight = Math.max(200, startHeight + (moveEvent.clientY - startY))
                const newWidth = Math.max(300, startWidth + (moveEvent.clientX - startX))
                setEditorHeight(newHeight)
                setEditorWidth(newWidth)
            }
        }

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)
    }

    return (
        <>
            <div
                className={`${styles.editor} ${isFullscreen ? styles.fullscreen : ''}`}
                style={{
                    minHeight: isFullscreen ? '100vh' : `${editorHeight}px`,
                    width: isFullscreen ? '100vw' : (typeof editorWidth === 'number' ? `${editorWidth}px` : editorWidth),
                    margin: isFullscreen ? 0 : '0 auto'
                }}
                onContextMenu={handleContextMenu}
            >
                <div className={styles.editorHeader}>
                    <Toolbar
                        onAction={handleAction}
                        onAddBlock={handleAddBlock}
                        activeStyles={activeStyles}
                        onSaveSelection={() => {
                            const sel = window.getSelection()
                            if (sel && sel.rangeCount > 0) {
                                savedRangeRef.current = sel.getRangeAt(0).cloneRange()
                            }
                        }}
                    />
                    <div className={styles.headerActions}>
                        <button
                            type="button"
                            onClick={() => addBlock('paragraph')}
                            className={styles.toolbarBtn}
                            title="Add Text Block"
                        >
                            <Type size={18} />
                            <span>Add Text</span>
                        </button>
                        <button
                            type="button"
                            onClick={() => setShowPreview(true)}
                            className={styles.toolbarBtn}
                            title="Preview Post"
                        >
                            <Eye size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={toggleFullscreen}
                            className={styles.toolbarBtn}
                            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                        >
                            {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                        </button>
                    </div>
                </div>

                {contextMenu.visible && (
                    <ContextMenu
                        x={contextMenu.x}
                        y={contextMenu.y}
                        onAction={handleAction}
                    />
                )}

                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="blocks">
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className={styles.blocksContainer}
                            >
                                {blocks.map((block, index) => (
                                    <Draggable key={block.id} draggableId={block.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={styles.blockWrapper}
                                            >
                                                <Block
                                                    block={block}
                                                    index={index}
                                                    onChange={(updated) => updateBlock(index, updated)}
                                                    onDelete={() => deleteBlock(index)}
                                                    onImageUpload={onImageUpload}
                                                    isDragging={snapshot.isDragging}
                                                />
                                                <div className={styles.addBetween}>
                                                    <button
                                                        type="button"
                                                        onClick={() => addBlock('paragraph', index + 1)}
                                                        className={styles.addBetweenBtn}
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>

                {!isFullscreen && (
                    <>
                        <div
                            className={styles.editorResizeHandleBottom}
                            onMouseDown={(e) => handleEditorResizeStart(e, 'bottom')}
                        />
                        <div
                            className={styles.editorResizeHandleRight}
                            onMouseDown={(e) => handleEditorResizeStart(e, 'right')}
                        />
                        <div
                            className={styles.editorResizeHandleCorner}
                            onMouseDown={(e) => handleEditorResizeStart(e, 'corner')}
                        />
                    </>
                )}
            </div>

            {/* Preview Modal */}
            {
                showPreview && (
                    <PreviewModal
                        html={blocksToHtml(blocks)}
                        onClose={() => setShowPreview(false)}
                    />
                )
            }
        </>
    )
}
