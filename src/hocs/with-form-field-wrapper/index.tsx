// @ts-nocheck
import { useState } from 'react';

const withFormFieldWrapper = (Component) => ({ valueKey, onChangeKey = '', onChangeTransformer }) => {
  const Wrapper = (props) => {
    const [value, setValue] = useState(() => {
      if (Array.isArray(valueKey)) {
        return valueKey.map((each) => props[each]);
      }

      return props[valueKey];
    });

    const valueKeys = [valueKey].flat();

    const valueKeysProps = valueKeys.reduce((acc, current) => ({
      ...acc,
      [current]: props[current],
    }), {});

    const finalProps = {
      ...props,
      ...valueKeysProps,
      [onChangeKey]: (event) => {
        const newValue = onChangeTransformer(event, value);

        props[onChangeKey](event, newValue);

        setValue(newValue);
      },
    };

    return (
      <Component {...finalProps} />
    );
  };

  return Wrapper;
};

export default withFormFieldWrapper;
