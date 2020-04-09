CREATE SCHEMA orgdev;

/* Entity Config */

CREATE TABLE IF NOT EXISTS orgdev.entity (
	id SERIAL PRIMARY KEY,
	domain VARCHAR UNIQUE,
	display_name VARCHAR,
	username VARCHAR,   -- override login 
	password VARCHAR,   -- override login
    created_date TIMESTAMP DEFAULT current_timestamp
);

CREATE TABLE IF NOT EXISTS orgdev.modules (
    id SERIAL PRIMARY KEY,
    name VARCHAR UNIQUE
);

CREATE TABLE IF NOT EXISTS orgdev.entity_modules (
    id SERIAL, -- no contextual meaning
    domain VARCHAR REFERENCES orgdev.entity(domain),
    module_id INTEGER REFERENCES orgdev.modules(id),
    display_name VARCHAR,
    status BOOLEAN DEFAULT TRUE
);

/* Users */

CREATE TABLE IF NOT EXISTS orgdev.login_by_entity (
    domain VARCHAR REFERENCES orgdev.entity(domain),
    username VARCHAR UNIQUE,
    password VARCHAR,
    admin_account BOOLEAN,
    app_account BOOLEAN,
    locked BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (domain, username)
);

/* Resource Module */

CREATE TABLE IF NOT EXISTS orgdev.resource_types (
    id SERIAL PRIMARY KEY,
    name VARCHAR UNIQUE
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
    resource_type_id INTEGER REFERENCES orgdev.resource_types(id),
    primary_content VARCHAR(4000),
    secondary_content VARCHAR DEFAULT NULL,
    tertiary_content VARCHAR DEFAULT NULL
);