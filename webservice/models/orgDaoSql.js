// Exports for sql queries

exports.authenticate = `
SELECT
        TRUE
FROM
        orgdev."entity" e
WHERE
        "domain" = $1
        AND "username" = $2
        AND "password" = md5($3)
;
`;

exports.entityInfo = `
SELECT
        e.domain,
        e.display_name
FROM
        orgdev."entity" e
WHERE
        "domain" = $1
;
`;

exports.entityPages = `
SELECT
        pbe.display_name,
        pbe.id
FROM
        orgdev."pages_by_entity" pbe
WHERE
        pbe.domain = $1
ORDER BY
        pbe.id ASC
;
`;

exports.pageContent = `
SELECT
        rbep.content
FROM
        orgdev.resources_by_entity_page rbep
WHERE
        rbep.domain = $1
        AND page_id = $2
;
`;