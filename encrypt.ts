const bcrypt = require('bcryptjs');

const senha = "2605";
//                  $2a$10$owT8yTleWccD/TPwEdaB.OlBQ8dkhhaYocjDPKNATt7S8Mdv84fSy
const senhaSalva = '$2a$10$owT8yTleWccD/TPwEdaB.OlBQ8dkhhaYocjDPKNATt7S8Mdv84fSy';

function encrypt(senha) {
    const cryptSenha = bcrypt.hashSync(senha);
    console.log(cryptSenha);
}


console.log('As senhas são iguais: ', bcrypt.compareSync(senha, senhaSalva));