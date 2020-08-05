'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {

    orderDetails() {
        return this.hasMany('App/Models/OrderDetail')
    }

}

module.exports = Order