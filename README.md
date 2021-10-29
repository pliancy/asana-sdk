# asana-sdk



This was created to have the proper types for the asana api. The official [node-asana](https://github.com/Asana/node-asana) sdk is generated by their open-api spec but doesn't includes types and there seems to be some inconsistencies with  @types/asana. Found [an issue](https://github.com/Asana/node-asana/issues/244) that suggested using the [open-api generator](https://github.com/OpenAPITools/openapi-generator-cli) with asana's open-api spec and used that to generate the files in /src/lib/asanaClient. 

All of the generated api classes are added to exported **Asana** class with the below having changes to not have to destrucutre the data key returned from both axios and Asana:

- PortfolioMemberships
- Portfolios
- ProjectMemberships
- Projects
- TeamMemberships
- Teams
- Users

### To generate the asnanaClient folder from the open-api cli generator:

```
npm install -g @openapitools/openapi-generator-cli
```

```
openapi-generator-cli generate -p apiPackage=api -p modelPackage=types -p withSeparateModelsAndApi=true -p modelPropertyNaming=original -p supportsES6=true -i https://raw.githubusercontent.com/Asana/developer-docs/master/defs/asana_oas.yaml -g typescript-axios -o /asanaClient --skip-validate-spec
```





### Test

```bash
yarn test
# or
yarn test.watch
```

### Test Coverage

```bash
yarn test.cov
# then
yarn cov.view
```
