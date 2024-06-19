const fs = require('fs');
const { execSync } = require('child_process');

// GitHub kullanıcı adınızı buraya girin
const githubUsername = 'your_github_username';

// Yılan oyunu oluşturulacak dosya yolu
const snakeGifPath = 'dist/github-contribution-grid-snake.gif';

// Yılan oyunu oluşturulacak komut
const command = `npx github-contributions -u ${githubUsername} -o ${snakeGifPath}`;

try {
  execSync(command);
  console.log('Snake contribution graph generated successfully!');
} catch (error) {
  console.error('Error generating snake contribution graph:', error);
  process.exit(1);
}
