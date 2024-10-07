import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    try {
        const products = await Product.findAll({
            include: [{
                model: EstoqueMinimo,
                attributes: ['quantidade_minima']
            }]
        });

        res.status(200).json(products);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
  }

  async update(req, res) {
    try{
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const product = await Product.findByPk(id);

      if(!product) {
        return res.status(400).json({
          errors: ['Produto inexistente'],
        });
      }

      const updatedProduct = await product.update(req.body);

      return res.json(updatedProduct);

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }


  async show(req, res) {
    try{
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const product = await Product.findByPk(id, {
        include: [{
          model: EstoqueMinimo,
          attributes: ['quantidade_minima'] 
        }]
      });

      if(!product) {
        return res.status(400).json({
          errors: ['Produto inexistente'],
        });
      }

      return res.json(product);

    } catch(e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ProductController();
