-- Create Entity
insert into orgdev.entity (domain, display_name, username, password) values ('demo.com', 'OrgR Demo', 'admin', md5('pass'));

-- Create user login
insert into orgdev.login_by_entity (domain, username, password) values ('demo.com', 'user', md5('pass'));

-- Create pages & content
insert into orgdev.pages_by_entity (domain, id, display_name) values 
('demo.com', 0, 'Resources');

insert into orgdev.resources_by_entity_page (domain, page_id, content) values ('demo.com', 0, 'Resource 1');
insert into orgdev.resources_by_entity_page (domain, page_id, content) values ('demo.com', 0, 'Resource 1');
insert into orgdev.resources_by_entity_page (domain, page_id, content) values ('demo.com', 0, 'Resource 1');

insert into orgdev.pages_by_entity (domain, id, display_name) values 
('demo.com', 1, 'People');

insert into orgdev.resources_by_entity_page (domain, page_id, content) values ('demo.com', 1, 'Person 1');
insert into orgdev.resources_by_entity_page (domain, page_id, content) values ('demo.com', 1, 'Office 2');
