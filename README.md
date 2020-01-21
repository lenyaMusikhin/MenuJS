# MenuJS
Сделать переключатель информации по клику.
tab - псевдо-массив, содержащий div с наименованием переключаемой информации,
info - div ,содержащий tab,
tabContent - псевдо-массив, содержащий div с информацией ,которая будет переключатся в зависимости на какой tab был сделан click.

hideTabContent() - при передаче "0" убирает все info,в начале передается "1" для показа первого info.
showTabConten() - при передаче "b" показывает на странице один tabContent[b].
info.addEventListener('click',function(event){}) - содержит проверку на какой tab был произведен click и вызов :
hideTabContent(0),
showTabContent(i).
