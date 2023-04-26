import { useCallback, useMemo } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import 'ut_asset_toolkit/assets/scss/ut_asset_toolkit.scss';

import { applyPolyfills, defineCustomElements } from 'ut_asset_toolkit/dist/js/tk-components/loader'

applyPolyfills().then(() => {
  defineCustomElements();
});

import {
  TkCheckbox,
  TkInput,
  TkTextArea,
  TkSelect,
  TkSingleSlider,
  TkRangeSlider,
  TkLightSwitch,
  TkSingleSelectList,
  TkMultiSelect,
} from 'ut_asset_toolkit_react';

import { FormsManager, Form, useSelector } from '@userzoomlibraries/toolkit-forms-manager';

import styles from '@/styles/Home.module.css'

import withFormFieldWrapper from '../hocs/with-form-field-wrapper';

const inter = Inter({ subsets: ['latin'] })

const Test = () => {
  const something1 = useSelector(useCallback((forms) => {
    const form = forms.find(each => each.name === 'test');

    if (form) {
      const field = form.fields.find(eachField => eachField.name === 'test-1');
      
      return field ? field.value : undefined;
    }
    
    return undefined;
  }, []));

  const something2 = useSelector(useCallback((forms) => {
    const form = forms.find(each => each.name === 'test');

    if (form) {
      const field = form.fields.find(eachField => eachField.name === 'test-2');
      
      return field ? field.value : undefined;
    }
    
    return undefined;
  }, []));

  const something3 = useSelector(useCallback((forms) => {
    const form = forms.find(each => each.name === 'test');

    if (form) {
      const field = form.fields.find(eachField => eachField.name === 'test-3');
      
      return field ? field.value : undefined;
    }
    
    return undefined;
  }, []));

  const something4 = useSelector(useCallback((forms) => {
    const form = forms.find(each => each.name === 'test');

    if (form) {
      const field = form.fields.find(eachField => eachField.name === 'test-4');
      
      return field ? field.value : undefined;
    }
    
    return undefined;
  }, []));

  const something5 = useSelector(useCallback((forms) => {
    const form = forms.find(each => each.name === 'test');

    if (form) {
      const field = form.fields.find(eachField => eachField.name === 'test-5');
      
      return field ? field.value : undefined;
    }
    
    return undefined;
  }, []));

  const something6 = useSelector(useCallback((forms) => {
    const form = forms.find(each => each.name === 'test');

    if (form) {
      const field = form.fields.find(eachField => eachField.name === 'test-6');
      
      return field ? field.value : undefined;
    }
    
    return undefined;
  }, []));

  const something7 = useSelector(useCallback((forms) => {
    const form = forms.find(each => each.name === 'test');

    if (form) {
      const field = form.fields.find(eachField => eachField.name === 'test-7');
      
      return field ? field.value : undefined;
    }
    
    return undefined;
  }, []));

  const something8 = useSelector(useCallback((forms) => {
    const form = forms.find(each => each.name === 'test');

    if (form) {
      const field = form.fields.find(eachField => eachField.name === 'test-8');
      
      return field ? field.value : undefined;
    }
    
    return undefined;
  }, []));

  const something9 = useSelector(useCallback((forms) => {
    const form = forms.find(each => each.name === 'test');

    if (form) {
      const field = form.fields.find(eachField => eachField.name === 'test-9');
      
      return field ? field.value : undefined;
    }
    
    return undefined;
  }, []));

  return (
    <div>
      <p>{`Value of "test-1" field => ${something1}`}</p>
      <p>{`Value of "test-2" field => ${something2}`}</p>
      <p>{`Value of "test-3" field => ${something3}`}</p>
      <p>{`Value of "test-4" field => ${something4}`}</p>
      <p>{`Value of "test-5" field => ${something5}`}</p>
      <p>{`Value of "test-6" field => ${something6}`}</p>
      <p>{`Value of "test-7" field => ${something7}`}</p>
      <p>{`Value of "test-8" field => ${something8}`}</p>
      <p>{`Value of "test-9" field => ${something9}`}</p>
    </div>
  )
}

const TkCheckboxWrapped = withFormFieldWrapper(TkCheckbox)({ valueKey: 'checked', onChangeKey: 'onCheck', onChangeTransformer: (event, value) => !value });
const TkInputWrapped = withFormFieldWrapper(TkInput)({ valueKey: 'value', onChangeKey: 'onValueChanged', onChangeTransformer: (event) => event.detail });
const TkTextAreaWrapped = withFormFieldWrapper(TkTextArea)({ valueKey: 'value', onChangeKey: 'onValueChanged', onChangeTransformer: (event) => event.detail });
const TkSelectWrapped = withFormFieldWrapper(TkSelect)({ valueKey: 'value', onChangeKey: 'onValueChanged', onChangeTransformer: (event) => event.detail });
const TkSingleSliderWrapped = withFormFieldWrapper(TkSingleSlider)({ valueKey: 'value', onChangeKey: 'onChange', onChangeTransformer: (event) => event.detail });
const TkLightSwitchWrapped = withFormFieldWrapper(TkLightSwitch)({ valueKey: 'isChecked', onChangeKey: 'onCheck', onChangeTransformer: (event, value) => !value });
const TkSingleSelectListWrapped = withFormFieldWrapper(TkSingleSelectList)({ valueKey: 'selected', onChangeKey: 'onChecked', onChangeTransformer: (event) => event.detail });
const TkMultiSelectWrapped = withFormFieldWrapper(TkMultiSelect)({ valueKey: 'selected', onChangeKey: 'onCheck', onChangeTransformer: (event) => event.detail });
const TkRangeSliderWrapper = withFormFieldWrapper(TkRangeSlider)({ valueKey: ['lowerValue', 'upperValue'], onChangeKey: 'onChange', onChangeTransformer: (event) => [event.detail.lowe, event.detail.upper] })

export default function Home() {
  const validateInput = useCallback((value) => ({
    validation: value && value.length >= 10,
    reason: 'Must be more than 10 characters.',
  }), []);

  const validations = useMemo(() => [validateInput], [validateInput]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FormsManager>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.center}>
          <Form name="test">
            <Form.Field
              name="test-1"
              initialValue={false}
              render={({ value, isDisabled, onChange }) => (
                <TkCheckboxWrapped
                  disabled={isDisabled}
                  onCheck={(event, newValue) => {
                    onChange({ checked: newValue });
                  }}
                  checked={value}
                  role="checkbox"
                >
                  Checkbox UT
                </TkCheckboxWrapped>
              )}
            />

            <Form.Field
              name="test-2"
              initialValue=""
              validate={validations}
              render={({ value, isInvalid, isDisabled, onChange }) => (
                <TkInputWrapped
                  className={styles.toolkit}
                  size="fullwidth"
                  error={isInvalid}
                  disabled={isDisabled}
                  onValueChanged={(event, newValue) => {
                    onChange({ value: newValue });
                  }}
                  value={value}
                />
              )}
            />

            <Form.ValidationMessage className={styles.error} of="test-2" />

            <Form.Field
              name="test-3"
              initialValue=""
              render={({ value, isInvalid, isDisabled, onChange }) => (
                <TkTextAreaWrapped
                  disabled={isDisabled}
                  onValueChanged={(event, newValue) => {
                    onChange({ value: newValue });
                  }}
                  value={value}
                />
              )}
            />

            <Form.Field
              name="test-4"
              initialValue="opt1"
              render={({ value, isInvalid, isDisabled, onChange }) => (
                <TkSelectWrapped
                  disabled={isDisabled}
                  options={[{
                    options: [{
                      label: 'Option 1',
                      value: 'opt1',
                    }],
                  }, {
                    options: [{
                      label: 'Option 2',
                      value: 'opt2',
                    }],
                  }, {
                    options: [{
                      label: 'Option 3',
                      value: 'opt3',
                    }],
                  }]}
                  onValueChanged={(event, newValue) => {
                    onChange({ value: newValue });
                  }}
                  value={value}
                />
              )}
            />

            <Form.Field
              name="test-5"
              initialValue={10}
              render={({ value, isInvalid, isDisabled, onChange }) => (
                <TkSingleSliderWrapped
                  disabled={isDisabled}
                  min={0}
                  max={100}
                  step={10}
                  onChange={(event, newValue) => {
                    onChange({ value: newValue });
                  }}
                  value={value}
                />
              )}
            />

            <div className={styles.switch}>
            <Form.Field
              name="test-6"
              initialValue={false}
              render={({ value, isInvalid, isDisabled, onChange }) => (
                <TkLightSwitchWrapped
                  isDisabled={isDisabled}
                  isChecked={value}
                  onCheck={(event, newValue) => {
                    onChange({ value: newValue });
                  }}
                />
              )}
            />
            </div>

            <Form.Field
              name="test-7"
              initialValue=""
              render={({ value, isInvalid, isDisabled, onChange }) => (
                <TkSingleSelectListWrapped
                  selected={value}
                  options={[{
                    label: 'Option 1',
                    value: 'opt1',
                  }, {
                    label: 'Option 2',
                    value: 'opt2',
                  }, {
                    label: 'Option 3',
                    value: 'opt3',
                  }]}
                  onChecked={(event, newValue) => {
                    onChange({ value: newValue });
                  }}
                />
              )}
            />

            <Form.Field
              name="test-8"
              initialValue={[]}
              render={({ value, isInvalid, isDisabled, onChange }) => (
                <TkMultiSelectWrapped
                  selected={value}
                  options={['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5']}
                  onCheck={(event, newValue) => {
                    onChange({ value: newValue });
                  }}
                />
              )}
            />

            <Form.Field
              name="test-9"
              initialValue={[10, 80]}
              render={({ value, isInvalid, isDisabled, onChange }) => (
                <TkRangeSliderWrapper
                  min={0}
                  max={100}
                  step={10}
                  onChange={(event, newValue) => {
                    onChange({ value: newValue });
                  }}
                  lowerValue={value[0]}
                  upperValue={value[1]}
                />
              )}
            />
          </Form>
        </div>

        <Test />
      </main>
      </FormsManager>
    </>
  )
}
