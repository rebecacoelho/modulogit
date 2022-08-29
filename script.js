/*

sexta-feira  >  git revert --no-edit 5ed3ed4    (retorna pra versão anterior e PERDE os arquivos 'quebrados')
segunda-feira  >  git reset --hard 5ed3ed4    (recupera os arquivos 'quebrados', assim você pode editá-los e fazer um novo commit com os dados corretos)


O git revert reverte as alterações de um commit antigo, e assim que ele reverter, ele cria um commit novo com os dados revertidos, ou seja, ele não modifica nenhum dos commits anteriores. 
O git reset é um pouco diferente, ele modifica para qual commit o "ponteiro" da branch está apontado. Você pode utilizar isso para desfazer alguma alteração, mas tem que tomar cuidado porque você vai modificar todo o histórico de commits.
*/