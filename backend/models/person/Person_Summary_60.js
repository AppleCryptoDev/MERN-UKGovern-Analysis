
module.exports = (sequelize, Sequelize) => {
    let PersonSummary60Model = sequelize.define("tbl_person_summary_60", {
        company_number: {
            type: Sequelize.STRING
        },
        links_self: {
            type: Sequelize.STRING
        },
        premises: {
            type: Sequelize.STRING
        },
        etag: {
            type: Sequelize.STRING
        },
        kind: {
            type: Sequelize.STRING
        },
        nationality: {
            type: Sequelize.STRING
        },
        natures_of_control: {
            type: Sequelize.STRING
        }
    });

    return PersonSummary60Model;
};