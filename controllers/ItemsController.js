import ItemsService from '../services/ItemsService.js';

class ItemsController {
  async create (req, res) {
    try {
      const item = await ItemsService.create(req.body.name);
      return res.json(item);
    } catch (e) {
      res.status(500).json(error);
    }
  }

  async getAll (req, res) {
    try {
      const items = await ItemsService.getAll();
      return res.json(items);
    } catch (e) {
      res.status(500).json(error);
    }
  }

  async update(req, res) {
    try {
      const updatedItem = await ItemsService.update(req.body);
      return res.json(updatedItem);
    } catch (e) {
      res.status(500).json(error);
    }
  }

  async delete(req, res) {
    try {
      const item = await ItemsService.delete(req.params.id);
      return res.json(item);
    } catch (e) {
      res.status(500).json(error);
    }
  }
};

export default new ItemsController();