'use strict'

//const OrderDetail = require('../../Models/OrderDetail')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const OrderDetail = use('App/Models/OrderDetail');
// const Twilio = use('Twilio');
// const Mail = use('Mail')

/**
 * Resourceful controller for interacting with orderdetails
 */
class OrderDetailController {


    /**
     * Show a list of all orderdetails.
     * GET orderdetails
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async getOrderDetails({ request, response }) {

        try {

            let order_details = await OrderDetail.query().fetch()

            return response.json(order_details)

        } catch (e) {

            console.log(e)
            return response.json({ message: 'Error getting order_details' + e })
        }
    }

    /**
     * Show a list of all orderdetails.
     * GET orderdetails
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {}

    /**
     * Render a form to be used for creating a new orderdetail.
     * GET orderdetails/create
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async create({ request, response, view }) {}

    /**
     * Create/save a new orderdetail.
     * POST orderdetails
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {

        try {

            var obj = request.all();
            var orders = [];

            for (var i in obj)
                orders.push(obj[i]);

            console.log(orders)

            let saved_orders = await OrderDetail.createMany(orders);


            //mmmm, for now if no errir assuming saved, out in own file


            try {



                // await Mail.send('emails.recover', { user, token }, (message) => {
                //     message
                //         .from('no-reply@shara.io')
                //         .to(email)
                // })

                // const message = await Twilio.messages.create({
                //     body: 'Your order has been created!',
                //     from: '+15005550006',
                //     to: '+263772871161'
                // });

                // console.log(message.sid);

            } catch (e) {
                console.log(e)

            }




            return response.json(saved_orders)

        } catch (e) {
            console.log(e)
            return response.json({ message: 'Error creating order_details' + e })
        }

    }

    /**
     * Display a single orderdetail.
     * GET orderdetails/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {}

    /**
     * Render a form to update an existing orderdetail.
     * GET orderdetails/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async edit({ params, request, response, view }) {}

    /**
     * Update orderdetail details.
     * PUT or PATCH orderdetails/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a orderdetail with id.
     * DELETE orderdetails/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {}
}

module.exports = OrderDetailController