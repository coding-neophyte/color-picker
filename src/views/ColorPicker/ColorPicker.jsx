import { useEffect, useState } from 'react';
import Display from '../../components/Display/Display';
import styles from './ColorPicker.css';
import useColorPicker from '../../hooks/useColorPicker';
import useAffirmation from '../../hooks/useAffirmation';

export default function ColorPicker() {

  const { fgColor, bgColor, didChangeColor, content, handleChange } = useColorPicker();

  const { affirmation } = useAffirmation({ fgColor, bgColor });

  return (
    <>
      <fieldset className={styles.colorPickerForm}>
        <legend>
          {didChangeColor
            ? affirmation
            : 'Pick some colors and a message to display!'}
        </legend>
        <input
          type="color"
          name="fgColor"
          aria-label="foreground color"
          value={fgColor}
          onChange={handleChange}
        />
        <input
          type="color"
          name="bgColor"
          aria-label="background color"
          value={bgColor}
          onChange={handleChange}
        />
        <input
          type="text"
          name="content"
          aria-label="content"
          value={content}
          onChange={handleChange}
        />
      </fieldset>
      <Display content={content} bgColor={bgColor} fgColor={fgColor} />
    </>
  );
}
