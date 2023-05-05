export function generateWords() {
    const words = [
      'hangman',
      'javascript',
      'react',
      'node',
      'express',
      'mongo',
      'apple',
      'banana',
      'orange',
      'grape'
    ];
  
    const randomWords = words;

    return Promise.resolve(randomWords);
  }