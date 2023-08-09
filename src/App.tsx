import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './App.module.css'
import './global.css'

function App() {
  const [sentence, setSentence] = useState('');
  const [submitedSentence, setSubmitedSentence] = useState('');
  const [vowelsCount, setVowelsCount] = useState(0);
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const handleCountVowels = (event: FormEvent) => {
    event.preventDefault();
    const newSentence = sentence.toLowerCase().split('');
    let vowelCount = 0;
    for (const letter of newSentence) {
      if (vowels.includes(letter)) {
        vowelCount++;
      }
    }
    setVowelsCount(vowelCount);
    setSubmitedSentence(sentence);
    setSentence('');
  }

  const handleChangeSentence = (event: ChangeEvent<HTMLInputElement>) => {
    setSentence(event.target.value);
    if (submitedSentence.length > 0) setSubmitedSentence('');
  }

  return (
    <div className={styles.div__card}>      
      <div className={styles.div__container}>
        <header className={styles.header}>
          <h1 className={styles.h1__title}>Vowel Counter</h1>
        </header>
        <form onSubmit={handleCountVowels} className={styles.form__content}>
          <p className={styles.form__description}>Enter a sentence and submit to display how many vowels it has</p>
          <input 
            type="text" 
            className={styles.form__input__sentence}
            onChange={handleChangeSentence}
            value={sentence}
            required
          />
          <button type='submit' className={styles.form__button__submit}>Submit</button>
        </form>
        <div className={styles.div__vowel__counter}>
          {submitedSentence.length > 0 && (
            <>
              <p>The sentence:</p>
              <hr />
              <p><strong><i>{submitedSentence}</i></strong></p>
              <hr />
              <p className={styles.p__vowel__count}>Has <strong>{vowelsCount}</strong> vowels</p>
            </>
          )}          
        </div>
      </div>
    </div>
  )
}

export default App
