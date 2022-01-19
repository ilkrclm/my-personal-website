import nodemailer from 'nodemailer'
export default async (req, res) => {
  const { ad, soyad, eposta, mesaj } = req.body

  const transporter = nodemailer.createTransport({
    service: 'Yandex',
    auth: {
      user: process.env.MAILUSER,
      pass: process.env.PASS,
    }
  })

  try {
    const emailRes = await transporter.sendMail({
      from: 'hi@ilkercalim.com',
      to: 'hi@ilkercalim.com',
      subject: `Yeni Form Mesajı - ${ad} ${soyad}`,
      html: `<div style='margin: 50px; font-family: helvetica neue,helvetica,sans-serif,arial; color:#0D2237'>
              <h1 style='color: #008808; font-size:24px'>Yeni Form Mesajı </h1>
              <div style='color:#0D2237; margin-top: 20px; font-size: 16px; line-height:1.85rem'>
                  <span>${ad} ${soyad} web sitesindeki formu doldurarak aşağıdaki mesajı iletmiştir. </span>
                  <br /><br /><div style='text-decoration: underline; font-weight: bold; margin-bottom:-1.5rem; margin-top: 10px;'>Mesaj Bilgileri:</div><br />
                  <span style="color:#6B7280">Adı Soyadı:</span> ${ad} ${soyad} <br /><span style="color:#6B7280">Eposta:</span> ${eposta}<br /><span style="color:#6B7280">Mesaj:</span> ${mesaj}<br />
              </div>
            </div>`
    })
  } catch (err) {
    console.log(err)
  }

  res.status(200).json(req.body)
}