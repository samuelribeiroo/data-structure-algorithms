Quick Sort (QS Algorithm) é um algoritmo de ordenação, também conhecido como algoritmo de ordenação eficiente.

O seu funcionamento é baseado na aplicação da técnica 'dividir para conquistar'.

'(...) é conhecido por sua eficiência em média e boa performance em grandes conjuntos de dados.'

O seu funcionamento se dá através da escolha de um pivô — podendo ser de qualquer parte da lista (início, meio, fim, whatever) — e, a partir disso, duas sublistas são criadas. Note que temos dois processos acontecendo: escolha do pivô e particionamento do array.

Sobre o particionamento, segue o seguinte princípio: menores à esquerda e maiores à direita.

Com essa ordenação prévia, de forma recursiva, o algoritmo vai ser chamado ordenando as sublistas e depois o array completo.

Vantagens:

Eficiente para grandes conjuntos de dados.

Requer pouca memória adicional (in-place).

Fácil de implementar.

Desvantagens:

Pior caso
𝑂
(
𝑛
2
)
O(n 
2
 ) pode ocorrer com escolhas ruins de pivô.

Não é estável (a ordem relativa de elementos iguais pode mudar).