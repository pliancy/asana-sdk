# asana-sdk



This was created to have the proper types for the asana api. The official [node-asana](https://github.com/Asana/node-asana) sdk is generated with their open-api spec but doesn't includes types and there seems to be some inconsistencies with  @types/asana. Found [an issue](https://github.com/Asana/node-asana/issues/244) that suggested using the [open-api generator](https://github.com/OpenAPITools/openapi-generator-cli) with asana's open-api spec and which is used to generate the /src/lib/asanaClient folder. 

All of the generated api classes are added to exported **Asana** class with the below having changes to not have to destrucutre the data key returned from both axios and Asana:

- PortfolioMemberships
- Portfolios
- ProjectMemberships
- Projects
- TeamMemberships
- Teams
- Users

### Install Package

```
yarn add @pliancy/asana-sdk
```



### PAT Auth

```
import { Asana } from '@pliancy/asana-sdk'

const asana = new Asana({accessToken: '12345'}, 'workspaceGid', 'ownerGid')
```



##### Dev Environment Setup:

The below command will create the generated /src/lib/asanaClient folder

```
yarn dev
```







