'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
    up() {
        this.create('orders', (table) => {
            table.string('order_number', 80).nullable().unique()
            table.string('order_status', 50).notNullable()
            table.string('preffered_payment_method', 100).nullable()
            table.string('order_location', 255).nullable()
            table.string('order_comment', 500).nullable()
            table.string('order_total', 100).nullable()
            table.integer('user_id', 10).notNullable()
            table.increments()
            table.timestamps()
        })
    }

    down() {
        this.drop('orders')
    }
}

module.exports = OrdersSchema