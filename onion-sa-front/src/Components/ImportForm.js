import React, { useState } from 'react'
import { importOrders } from '../Services/api'
import { useNavigate } from 'react-router-dom'

const ImportForm = () => {
  const [file, setFile] = useState(null)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (file) {
      setLoading(true)
      try {
        await importOrders(file)
        setMessage('Arquivo importado com sucesso!')
        navigate('/data')
      } catch (error) {
        console.error(error)
        setMessage('Erro ao importar o arquivo.')
      } finally {
        setLoading(false)
      }
    } else {
      setMessage('Por favor, selecione um arquivo.')
    }
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/assets/PlanilhaExemplo.xlsx'
    link.setAttribute('download', 'PlanilhaExemplo.xlsx')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Importação de Pedidos</h1>
        <p className="mb-4 text-center text-gray-700">
          Utilize o formulário abaixo para importar seus pedidos. Você pode baixar um exemplo de planilha para preenchimento no botão abaixo.
        </p>
        <div className="flex justify-center mb-4">
          <button
            onClick={handleDownload}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Baixar Exemplo de Planilha
          </button>
          
        </div>
        <p className="mb-4 text-center text-gray-700">
            Verifique <a href="https://docs.google.com/spreadsheets/d/1htc2DHNomvfUtr3pOizMjb0d6X9NuKvlGMw-mkUnaiM/edit?usp=sharing" className="text-blue-500 underline">aqui</a> a planilha preenchida com os dados.
          </p>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="file"
            onChange={handleFileChange}
            className="mb-4 p-2 border border-gray-300 w-full"
          />
          <button
            type="submit"
            className={`w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Importando...' : 'Importar'}
          </button>
          {message && <p className="mt-4 text-red-500">{message}</p>}
        </form>
      </div>
    </div>
  )
}

export default ImportForm
