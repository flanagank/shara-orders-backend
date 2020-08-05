'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Order = use('App/Models/Order');

/**
 * Resourceful controller for interacting with orders
 */
class OrderController {


    /**
     * Show a list of all orders.
     * GET orders
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async getOrders({ request, response }) {

        try {

            let orders = await Order.query().with('orderDetails').fetch()

            return response.json(orders)

        } catch (e) {

            console.log(e)
            return response.json({ message: 'Error getting orders' + e })
        }
    }


    /**
     * Show a list of all orders.
     * GET orders
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {}

    /**
     * Render a form to be used for creating a new order.
     * GET orders/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new order.
     * POST orders
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {


        try {

            let order = await Order.create(request.all())

            return response.json(order)

        } catch (e) {
            console.log(e)
            return response.json({ message: 'Error creating order' + e })
        }


    }

    /**
     * Display a single order.
     * GET orders/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing order.
     * GET orders/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update order details.
     * PUT or PATCH orders/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a order with id.
     * DELETE orders/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = OrderController