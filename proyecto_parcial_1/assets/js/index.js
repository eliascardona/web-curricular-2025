let lastScrollY = window.scrollY;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
	if (window.scrollY > lastScrollY) {
		header.classList.add("hide");
	} else {
		header.classList.remove("hide");
	}
	lastScrollY = window.scrollY;
})

const accordionData = [
	{
		title: "¿Cuál es su esquema de cobro?",
		content: "Se elabora un presupuesto personalizado según el alcance de tu proyecto."
	},
	{
		title: "¿Qué métodos de pago aceptan?",
		content: "Acpetamos los métodos de pago: efectivo, transferencia bancaria y pago con tarjeta en nuestra plataforma de pago online (Pago con Stripe)."
	},
	{
		title: "¿Trabjan con clientes internacionales?",
		content: "Estamos abiertos a trbajar con organizaciones de todo el mundo siempre y cuando formen parte del Banco Monetario Internacional."
	}
];

const accordionContainer = document.getElementById("accordion-container");

function createAccordionItem({ title, content }) {
	const item = document.createElement("div");
	item.classList.add("accordion-item");

	const header = document.createElement("div");
	header.classList.add("accordion-header");
	header.textContent = title;

	const contentDiv = document.createElement("div");
	contentDiv.classList.add("accordion-content");
	contentDiv.textContent = content;

	header.addEventListener("click", function () {
		// Cierra cualquier otro acordeón abierto
		document.querySelectorAll(".accordion-item").forEach(acc => {
			if (acc !== item) {
				acc.classList.remove("active");
				acc.querySelector(".accordion-content").style.display = "none";
			}
		});

		// Alterna el estado del acordeón actual
		if (item.classList.contains("active")) {
			item.classList.remove("active");
			contentDiv.style.display = "none";
		} else {
			item.classList.add("active");
			contentDiv.style.display = "block";
		}
	});

	item.appendChild(header);
	item.appendChild(contentDiv);

	return item;
}

accordionData.forEach(data => {
	accordionContainer.appendChild(createAccordionItem(data))
})