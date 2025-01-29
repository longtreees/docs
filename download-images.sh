#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p docs/public/images

# Download images
curl "https://media1-production-mightynetworks.imgix.net/asset/931aafa3-af4f-4894-833d-f51785ecc149/Tree_Steward.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format" -o docs/public/images/Tree_Steward.png

curl "https://media1-production-mightynetworks.imgix.net/asset/595367cd-88a4-45be-ae7e-c285071bee72/Distribution.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format" -o docs/public/images/Distribution.png

curl "https://media1-production-mightynetworks.imgix.net/asset/3cfd39b1-1e2f-4956-938b-c3667116dd5f/21.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format" -o docs/public/images/21.png

curl "https://media1-production-mightynetworks.imgix.net/asset/b21cefe6-92f5-4e58-b7bc-feb6b4444b82/The_Community_Tree.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format" -o docs/public/images/The_Community_Tree.png

curl "https://media1-production-mightynetworks.imgix.net/asset/55539e7f-45cc-40dd-ab06-55f63208b000/Transplanting.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format" -o docs/public/images/Transplanting.png

curl "https://media1-production-mightynetworks.imgix.net/asset/4bc8b7e6-f52f-41ac-a662-1a637c6ab1c2/Access.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format" -o docs/public/images/Access.png

# Make images readable
chmod 644 docs/public/images/*.png