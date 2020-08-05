'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
    up() {
        this.create('products', (table) => {
            table.increments()
            table.string('sku', 80).notNullable().unique()
            table.string('title', 254).notNullable()
            table.string('description', 500).nullable()
            table.string('price', 50).nullable()
            table.string('status', 50).nullable()
            table.integer('category_id', 10).nullable()
            table.integer('popular', 10).nullable()
            table.integer('featured', 10).nullable()
            table.string('averange_rating', 50).nullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('products')
    }
}

module.exports = ProductSchema