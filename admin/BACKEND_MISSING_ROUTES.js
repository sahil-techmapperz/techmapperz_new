// Add these routes to your EventRoute file after the existing routes

// =============================================================================
// CULTURE ROUTES (ADD THESE TO YOUR BACKEND)
// =============================================================================

// Get single culture item by ID
router.get('/culture/:id', async (req, res) => {
  try {
    const culture = await Culture.findById(req.params.id);
    
    if (!culture) {
      return res.status(404).json({
        success: false,
        error: 'Culture item not found',
        message: 'Culture item with the specified ID does not exist'
      });
    }
    
    res.json({
      success: true,
      data: culture
    });
  } catch (error) {
    console.error('Error getting culture item:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid culture ID',
        message: 'The provided ID is not valid'
      });
    }
    res.status(500).json({
      success: false,
      error: 'Error getting culture item',
      message: error.message
    });
  }
});

// Update culture item
router.put('/culture/:id', async (req, res) => {
  try {
    const { title, description, icon, order } = req.body;
    
    const culture = await Culture.findByIdAndUpdate(
      req.params.id,
      { title, description, icon, order },
      { new: true, runValidators: true }
    );
    
    if (!culture) {
      return res.status(404).json({
        success: false,
        error: 'Culture item not found',
        message: 'Culture item with the specified ID does not exist'
      });
    }
    
    res.json({
      success: true,
      data: culture
    });
  } catch (error) {
    console.error('Error updating culture item:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid culture ID',
        message: 'The provided ID is not valid'
      });
    }
    res.status(500).json({
      success: false,
      error: 'Failed to update culture item',
      message: error.message
    });
  }
});

// Delete culture item
router.delete('/culture/:id', async (req, res) => {
  try {
    const culture = await Culture.findByIdAndDelete(req.params.id);
    
    if (!culture) {
      return res.status(404).json({
        success: false,
        error: 'Culture item not found',
        message: 'Culture item with the specified ID does not exist'
      });
    }
    
    res.json({
      success: true,
      message: 'Culture item deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting culture item:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid culture ID',
        message: 'The provided ID is not valid'
      });
    }
    res.status(500).json({
      success: false,
      error: 'Failed to delete culture item',
      message: error.message
    });
  }
});

// =============================================================================
// WORKSPACE ROUTES (ADD THESE TO YOUR BACKEND)
// =============================================================================

// Get single workspace image by ID
router.get('/workspace/:id', async (req, res) => {
  try {
    const workspace = await WorkspaceImage.findById(req.params.id);
    
    if (!workspace) {
      return res.status(404).json({
        success: false,
        error: 'Workspace image not found',
        message: 'Workspace image with the specified ID does not exist'
      });
    }
    
    res.json({
      success: true,
      data: workspace
    });
  } catch (error) {
    console.error('Error getting workspace image:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid workspace ID',
        message: 'The provided ID is not valid'
      });
    }
    res.status(500).json({
      success: false,
      error: 'Error getting workspace image',
      message: error.message
    });
  }
});

// Update workspace image
router.put('/workspace/:id', async (req, res) => {
  try {
    const { src, alt, type, width, height } = req.body;
    
    // Validate type if provided
    if (type) {
      const validTypes = ['featured', 'tall', 'wide', 'wide2', 'square'];
      if (!validTypes.includes(type)) {
        return res.status(400).json({
          success: false,
          error: 'Invalid type',
          message: `Type must be one of: ${validTypes.join(', ')}`
        });
      }
    }
    
    const updateData = {};
    if (src) updateData.src = src;
    if (alt) updateData.alt = alt;
    if (type) updateData.type = type;
    if (width) updateData.width = parseInt(width);
    if (height) updateData.height = parseInt(height);
    
    const workspace = await WorkspaceImage.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!workspace) {
      return res.status(404).json({
        success: false,
        error: 'Workspace image not found',
        message: 'Workspace image with the specified ID does not exist'
      });
    }
    
    res.json({
      success: true,
      data: workspace
    });
  } catch (error) {
    console.error('Error updating workspace image:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid workspace ID',
        message: 'The provided ID is not valid'
      });
    }
    res.status(500).json({
      success: false,
      error: 'Failed to update workspace image',
      message: error.message
    });
  }
});

// Delete workspace image
router.delete('/workspace/:id', async (req, res) => {
  try {
    const workspace = await WorkspaceImage.findByIdAndDelete(req.params.id);
    
    if (!workspace) {
      return res.status(404).json({
        success: false,
        error: 'Workspace image not found',
        message: 'Workspace image with the specified ID does not exist'
      });
    }
    
    res.json({
      success: true,
      message: 'Workspace image deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting workspace image:', error);
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        error: 'Invalid workspace ID',
        message: 'The provided ID is not valid'
      });
    }
    res.status(500).json({
      success: false,
      error: 'Failed to delete workspace image',
      message: error.message
    });
  }
}); 