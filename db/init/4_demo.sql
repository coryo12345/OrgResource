begin;

set search_path to orgdev;
create temp table entityname as (select 'demo.com' as name);

-- Create Entity
delete from orgdev.entity where domain = (select name from entityname);
insert into orgdev.entity (domain, display_name, username, password) 
values ((select name from entityname), 'OrgR Demo', 'admin', md5('pass'));

-- Entity Configuration
delete from orgdev.entity_modules where domain = (select name from entityname);
insert into orgdev.entity_modules (domain, module_id, display_name)
values
    ((select name from entityname), (select id from orgdev.modules where name = 'resources'), 'Resources'),
    ((select name from entityname), (select id from orgdev.modules where name = 'users'), 'Users'),
    ((select name from entityname), (select id from orgdev.modules where name = 'settings'), 'Settings')
;

-- Create user login
delete from orgdev.login_by_entity where domain = (select name from entityname);
insert into orgdev.login_by_entity (domain, username, password, admin_account, app_account) 
values ((select name from entityname), 'user', md5('pass'), FALSE, TRUE);

-- Create pages & content
delete from orgdev.pages_by_entity where domain = (select name from entityname);
delete from orgdev.resources_by_entity_page where domain = (select name from entityname);

insert into orgdev.pages_by_entity (domain, id, display_name) values 
((select name from entityname), 0, 'Resources');

insert into orgdev.resources_by_entity_page (domain, page_id, resource_type_id, primary_content) values ((select name from entityname), 0, (select id from resource_types where name = 'raw'), 'Resource 1');
insert into orgdev.resources_by_entity_page (domain, page_id, resource_type_id, primary_content) values ((select name from entityname), 0, (select id from resource_types where name = 'raw'), 'Resource 2');
insert into orgdev.resources_by_entity_page (domain, page_id, resource_type_id, primary_content) values ((select name from entityname), 0, (select id from resource_types where name = 'raw'), 'Resource 3');

insert into orgdev.pages_by_entity (domain, id, display_name) values 
((select name from entityname), 1, 'People');

insert into orgdev.resources_by_entity_page (domain, page_id, resource_type_id, primary_content) values ((select name from entityname), 1, (select id from resource_types where name = 'raw'), 'Person 1');
insert into orgdev.resources_by_entity_page (domain, page_id, resource_type_id, primary_content) values ((select name from entityname), 1, (select id from resource_types where name = 'raw'), 'Office 2');

drop table entityname;

end;