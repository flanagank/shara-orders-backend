'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderDetailsSchema extends Schema {
    up() {
        this.create('order_details', (table) => {
            table.integer('product_id', 10).notNullable()
            table.string('unit_price', 50).notNullable()
            table.integer('quantity', 10).nullable()
            table.string('line_total', 50).nullable()
            table.integer('order_id', 10).unsigned();
            table.foreign('order_id').references('orders.id');
            table.increments()
            table.timestamps()
        })
    }

    down() {
        this.drop('order_details')
    }
}

module.exports = OrderDetailsSchema