'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Category = use('App/Models/Category');


/**
 * Resourceful controller for interacting with categories
 */

class CategoryController {

    async getCategories({ request, response }) {

        try {
            let categories = await Category.query().fetch()

            return response.json(categories)

        } catch (e) {

            console.log(e)
            return response.json({ message: 'Error getting categories' + e })
        }
    }



    /**
     * Show a list of all categories.
     * GET categories
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {

        let categories = await Category.query().with('category_name').fetch()

        return response.json(categories)

    }

    /**
     * Render a form to be used for creating a new category.
     * GET categories/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {

    }

    /**
     * Create/save a new category.
     * POST categories
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {
        try {

            let category = await Category.create(request.all())

            return response.json(category)

        } catch (e) {
            console.log(e)
            return response.json({ message: 'Store error category' + e })
        }
    }

    /**
     * Display a single category.
     * GET categories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing category.
     * GET categories/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {

    }

    /**
     * Update category details.
     * PUT or PATCH categories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {

        try {


            let category = await Category.find(params.id)
            category.category_name = request.input('category_name')

            await category.save()

            return response.json(category)


        } catch (e) {
            console.log(e)
            return response.json({ message: 'Error updating category' + e })
        }

    }

    /**
     * Delete a category with id.
     * DELETE categories/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = CategoryController