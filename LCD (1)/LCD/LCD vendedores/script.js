function verDetallePedido(index) {
  const pedidos = [
    { numero: "001", fecha: "2023-04-21 10:30:00", cliente: "John Doe", estado: "Pendiente", detalles: "1 Coca Cola 3 litros. calle 5ta #23-34" },
    { numero: "002", fecha: "2023-04-20 15:45:00", cliente: "Jane Smith", estado: "Enviado", detalles: "salchipapa para 3 personas. el vallado" }
  ];
  
  const pedido = pedidos[index];
  const detallePedido = document.getElementById("detallePedido");
  const pedidoDetalles = document.getElementById("pedidoDetalles");

  pedidoDetalles.textContent = pedido.detalles;

  detallePedido.style.display = "block";
}



function editarProducto(nombre) {
  var row = document.getElementById('row-' + nombre);
  var inputs = row.getElementsByTagName('input');

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].removeAttribute('readonly');
  }
}

function eliminarProducto(nombre) {
  var row = document.getElementById('row-' + nombre);
  row.remove();
}

function agregarProducto() {
  var nombre = prompt("Ingrese el nombre del producto:");
  var precio = prompt("Ingrese el precio del producto:");
  var existencias = prompt("Ingrese la cantidad de existencias del producto:");

  var table = document.getElementById("products-table");
  var newRow = table.insertRow();

  newRow.setAttribute('id', 'row-' + nombre);

  var cell1 = newRow.insertCell();
  var cell2 = newRow.insertCell();
  var cell3 = newRow.insertCell();
  var cell4 = newRow.insertCell();

  cell1.innerHTML = '<input id="input-' + nombre + '" type="text" value="' + nombre + '" readonly>';
  cell2.innerHTML = '<input id="input-precio-' + nombre + '" type="text" value="' + precio + '" readonly>';
  cell3.innerHTML = '<input id="input-existencias-' + nombre + '" type="text" value="' + existencias + '" readonly>';
  cell4.innerHTML = `
    <div class="actions">
      <button onclick="editarProducto('${nombre}')">Editar</button>
      <button onclick="eliminarProducto('${nombre}')">Eliminar</button>
    </div>
  `;
}



function verDetallePedido(index) {
  const pedidos = [
    { numero: "001", fecha: "2023-04-21 10:30:00", cliente: "John Doe", estado: "Pendiente", detalles: "Hamburguesa sin cebolla. El vallado" },
    { numero: "002", fecha: "2023-04-20 15:45:00", cliente: "Jane Smith", estado: "Enviado", detalles: "5 Empanadas con gaseosa. Calle 5ta #23-12" }
  ];
  
  const pedido = pedidos[index];
  const detallePedido = document.getElementById("detallePedido");
  const pedidoDetalles = document.getElementById("pedidoDetalles");

  pedidoDetalles.textContent = pedido.detalles;

  detallePedido.style.display = "block";
}

function cerrarVentana() {
  const detallePedido = document.getElementById("detallePedido");
  detallePedido.style.display = "none";
}
