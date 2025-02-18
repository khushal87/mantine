import { ComponentDoc } from 'react-docgen-typescript';

const replace = {
  MantineNumberSize: 'number | "xs" | "sm" | "md" | "lg" | "xl"',
  MantineSize: '"xs" | "sm" | "md" | "lg" | "xl"',
  GroupPosition: '"right" | "center" | "left" | "apart"',
  ReactText: 'string | number',
  'ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)>':
    'ReactElement',
};

export function prepareDeclaration(declaration: ComponentDoc) {
  const data = { ...declaration };
  delete data.tags;
  delete data.methods;

  Object.keys(data.props).forEach((prop) => {
    delete data.props[prop].parent;
    delete data.props[prop].declarations;
    delete data.description;

    if (data.props[prop].type.name in replace) {
      data.props[prop].type.name = replace[data.props[prop].type.name];
    }
  });

  // This sorts the props object in ascending order
  const ordered = Object.keys(data.props)
    .sort()
    .reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key] = data.props[key];
      return obj;
    }, {});

  data.props = ordered;

  return data;
}
