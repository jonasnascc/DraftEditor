## DraftEditor

Deploy  do projeto:
https://draft-editor-murex.vercel.app/

Como rodar:
1. Execute o seguinte comando no diretório raiz para instalar as dependencias:
```
	npm install
```
2. Execute o seguinte comando no diretório raiz para iniciar a aplicação:
```
	npm start
```

Projeto feito com os seguintes requisitos:

1. Componentes:
• Desenvolva um componente DraftEditor que será o editor de rascunhos de redação.
• Crie um componente Paragraph que represente um parágrafo individual do texto.

2. Funcionalidades:
• Adicionar Parágrafo: Implemente um campo de texto onde o usuário possa digitar um novo parágrafo e um botão para adicioná-lo ao rascunho.
• Salvar Rascunho: Inclua um botão para salvar o rascunho atual. Não é necessário persistir em banco de dados, apenas simular a funcionalidade.
• Visualizar Texto: Renderize todos os parágrafos adicionados em uma área de visualização de texto.

3. Estado e Gerenciamento de Dados:
• Os parágrafos devem ser armazenados em um array no estado do componente DraftEditor.
• Cada parágrafo deve ter um id único para identificação.

4. Responsividade: A aplicação deve se adaptar a diferentes tamanhos de tela, especialmente para simular um ambiente de redação.
