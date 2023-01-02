import Item from '../models/Item.js';

class ItemsService {
  async create (name) {
    return await Item.create({ name });
  }

  async getAll() {
    return await Item.find();
  }

  async update(item) {
    return await Item.findByIdAndUpdate(item._id, item, { new: true });
  }

  async delete(id) {
    return await Item.findByIdAndDelete(id);
  }
};

export default new ItemsService();