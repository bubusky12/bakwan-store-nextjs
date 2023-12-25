
import crypto from 'crypto'
const secret = 'nelson-cinta-aga'
const key = crypto.scryptSync(secret, 'salt', 32);
console.log(`key: ${key} length: ${key.length}`);

const iv = crypto.randomBytes(16);

//Encrypting text
export function encrypt(text) {
   let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
   let encrypted = cipher.update(text);
   encrypted = Buffer.concat([encrypted, cipher.final()]);
   return { iv: iv.toString('hex'), encryptedData: encrypted.toString('hex') };
}

// Decrypting text
export function decrypt(text) {
    const [iv_d, encryptedData] = text.split('-')
   let iv = Buffer.from(iv_d, 'hex');
   let encryptedText = Buffer.from(encryptedData, 'hex');
   let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
   let decrypted = decipher.update(encryptedText);
   decrypted = Buffer.concat([decrypted, decipher.final()]);
   return decrypted.toString();

}