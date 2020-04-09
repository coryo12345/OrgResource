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
        rbep.primary_content
FROM
        orgdev.resources_by_entity_page rbep
WHERE
        rbep.domain = $1
        AND page_id = $2
;
`;

exports.entityModules = `
SELECT
        m.name,
        em.display_name
FROM
        orgdev.entity_modules em,
        orgdev.modules m
WHERE
        em.domain = $1
        AND em.module_id = m.id
        AND em.status = TRUE
ORDER BY
        em.id ASC
;
`;