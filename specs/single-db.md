# Single Database Schema

## Database Tables

* users - table listing all users
* rights - table listing all types of rights (owner, editor, viewer)
* teams - table listing all teams created
* user_team_rights - table listing all team memembers & their associated rights
* projects - table listing all projects
* team_projects - table listing all projects a team can access
* meta - table list all global meta tags
* folders - table listing all folders
* pages - table listing all pages
* images - table listing all images
* bookmarks - table listing all bookmarks
* tags - table listing all tags
* comments - table listing all comments
* page_meta - table listing all page meta tag pairs & values
* taggables - table listing all tagged pairings

### Model Relationships

* **users** can have many **teams**
* **users** can have many **projects**
* **users** can have many **folders**
* **users** can have many **pages**
* **users** can have many **images**
* **users** can have many **bookmarks**
* **users** can have many **tags**
* **users** can have many **comments**
* **users** can belong to many **teams**
* **users** can have only one **right** per **team**

* **teams** belong to one **user**
* **teams** can have many **users**
* **teams** can have many **rights**
* **teams** can have many **projects**

* **projects** belong to one **user**
* **projects** can have many **teams**
* **projects** can have many **folders**
* **projects** can have many **comments**

* **folders** belong to one **project**
* **folders** belong to one **folder**
* **folders** belong to one **user**
* **folders** can have many **folders**
* **folders** can have many **pages**
* **folders** can have many **bookmarks**
* **folders** can have many **images**
* **folders** can have many **comments**

* **pages** belong to one **folder**
* **pages** belong to one **user**
* **pages** can have many **tags**
* **pages** can have many **metas**
* **pages** can have many **comments**

* **bookmarks** belong to one **folder**
* **bookmarks** belong to one **user**
* **bookmarks** can have many **tags**
* **bookmarks** can have many **comments** 

* **images** belong to one **folder**
* **images** belong to one **user**
* **images** can have many **tags**
* **images** can have many **comments** 

* **tags** belong to one **user**
* **tags** can have many **pages**
* **tags** can have many **bookmarks**
* **tags** can have many **images**

* **metas** can have many **pages**

* **comments** belong to one **user**
* **comments** belong to one **commentable_type**
* **coments** can have many **comments*


### Table Structure

**users**
* id
* pen_name
* email
* password
* twitter
* facebook
* google
* is_admin
* last_login
* created_at
* updated_at

**rights**
* id
* right_name
* description
* edit
* delete
* comment
* created_at
* updated_at

**teams**
* id
* team_name
* user_id (creator)
* created_at
* updated_at

**user_team_rights**
* user_id
* team_id
* right_id

**projects**
* id
* project_name
* user_id
* created_at
* updated_at
 
**team_projects**
* team_id
* project_id

**meta*
* id
* meta_name
* created_at
* updated_at

**folders**
* id
* folder_name
* project_id
* parent_id
* user_id
* created_at
* updated_at

**pages**
* id
* page_name
* folder_id
* user_id
* content
* created_at
* updated_at

**images**
* id
* filename
* caption
* folder_id
* user_id
* created_at
* updated_at 

**bookmarks**
* id
* url
* bookmark_name
* folder_id
* user_id
* created_at
* updated_at

**comments**
* id
* comment
* user_id
* commentable_type
* commentable_id
* created_at
* updated_at

**tags**
* id
* tag_name
* user_id
* created_at
* updated_at

**page_meta**
* page_id
* meta_id
* value
* created_at
* updated_at

**taggables**
* tag_id
* taggable_type
* taggable_id