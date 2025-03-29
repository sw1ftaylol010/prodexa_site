'use client'

import { useState } from 'react'

interface ProductContactFormProps {
  productType: string
}

const ProductContactForm = ({ productType }: ProductContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: productType,
    message: '',
    acceptTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const isCheckbox = type === 'checkbox'

    setFormData(prev => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message || !formData.acceptTerms) {
      setSubmitStatus({
        success: false,
        message: 'Please fill in all required fields and accept the terms.'
      })
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({})

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Thank you! Your message has been successfully sent.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          product: productType,
          message: '',
          acceptTerms: false
        })
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        success: false,
        message: 'Failed to submit the form. Please try again later.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Request a Quote</h2>
      {submitStatus.message && (
        <div
          className={`p-4 mb-4 rounded-md ${
            submitStatus.success
              ? 'bg-green-100 text-green-800 border border-green-300'
              : 'bg-red-100 text-red-800 border border-red-300'
          }`}
        >
          {submitStatus.message}
        </div>
      )}
      <form className="space-y-6 bg-white/10 backdrop-blur-sm p-6 rounded-md" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="product-name" className="block mb-2 text-sm font-medium text-white">
              Name *
            </label>
            <input
              type="text"
              id="product-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 text-white rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="product-email" className="block mb-2 text-sm font-medium text-white">
              Email *
            </label>
            <input
              type="email"
              id="product-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-white/30 bg-white/10 text-white rounded-md"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="product-phone" className="block mb-2 text-sm font-medium text-white">
            Phone
          </label>
          <input
            type="tel"
            id="product-phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-white/30 bg-white/10 text-white rounded-md"
          />
        </div>
        <div>
          <label htmlFor="product-message" className="block mb-2 text-sm font-medium text-white">
            Message *
          </label>
          <textarea
            id="product-message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-white/30 bg-white/10 text-white rounded-md"
            required
            placeholder={`I'm interested in ${productType}. Please provide information about...`}
          ></textarea>
        </div>
        <div>
          <label className="flex items-start">
            <input
              type="checkbox"
              name="acceptTerms"
              checked={formData.acceptTerms}
              onChange={handleChange}
              className="mt-1 mr-2"
              required
            />
            <span className="text-sm text-white/90">
              I have read the cookie policy and privacy policy,
              I accept all conditions and want to continue working with the site
            </span>
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-white text-prodexa-blue px-6 py-3 rounded-md font-medium transition ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Get a Quote'}
        </button>
      </form>
    </div>
  )
}

export default ProductContactForm
