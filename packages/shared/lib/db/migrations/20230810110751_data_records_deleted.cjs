const tableName = '_nango_sync_data_records';

exports.up = function (knex, _) {
    return knex.schema.withSchema('nango').alterTable(tableName, function (table) {
        table.boolean('external_is_deleted').defaultTo(false).index();
        table.dateTime('external_deleted_at');
    });
};

exports.down = function (knex, _) {
    return knex.schema.withSchema('nango').table(tableName, function (table) {
        table.dropColumn('external_is_deleted');
        table.dropColumn('external_deleted_at');
    });
};
