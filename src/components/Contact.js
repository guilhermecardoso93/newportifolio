import { useRef } from "react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const form = useRef()

  const sendEmail = async (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_k101ils",
        "template_7xv6tru",
        form.current,
        "RSSU760IHaANuHBew"
      )
      .then(
        (result) => {
          toast.success("Mensagem enviada! Obrigado.")
        },
        (error) => {
          toast.error("Por favor, escreva alguma coisa :(")
        }
      )

    e.target.reset()
  }
  return (
    <section className="contact" id="contact">
      <div>
        <div className="align-items-center">
          <div>
            <h3 className="text-center text-4xl font-bold text-white px-4 py-2">
              Entre em contato!
            </h3>
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <div className="px-1">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Nome"
                    required
                  />
                </div>

                <div className="px-1">
                  <input
                    type="email"
                    name="user_email"
                    placeholder="E-mail"
                    required
                  />
                </div>
                <div sm={6} className="px-1">
                  <input
                    type="tel"
                    name="user_phone"
                    placeholder="Telefone"
                    required
                  />
                </div>
                <div className="px-1">
                  <textarea
                    rows={4}
                    cols={20}
                    placeholder="Mensagem"
                    name="message"
                    required
                  ></textarea>
                  <button type="submit" className="buttonContact">
                    <span>Enviar</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
