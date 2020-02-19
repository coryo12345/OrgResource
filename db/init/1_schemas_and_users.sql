CREATE SCHEMA orgdev;

CREATE TABLE IF NOT EXISTS orgdev.entity (
	id SERIAL PRIMARY KEY,
	domain VARCHAR UNIQUE,
	display_name VARCHAR,
	username VARCHAR,
	password VARCHAR
);

CREATE TABLE IF NOT EXISTS orgdev.login_by_entity (
    domain VARCHAR REFERENCES orgdev.entity(domain),
    username VARCHAR,
    password VARCHAR,
    PRIMARY KEY (domain, username)
);

CREATE TABLE IF NOT EXISTS orgdev.pages_by_entity (
    domain VARCHAR REFERENCES orgdev.entity(domain),
    id INTEGER,
    display_name VARCHAR,
    PRIMARY KEY (domain, id)
);

CREATE TABLE IF NOT EXISTS orgdev.resources_by_entity_page (
    domain VARCHAR,
    page_id INTEGER,
    content VARCHAR
);