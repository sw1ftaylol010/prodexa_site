'use client'

import { useState } from 'react'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: '',
    acceptTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean
    message?: string
  }>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
          product: '',
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
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
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
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 font-medium">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-2 font-medium">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="product" className="block mb-2 font-medium">
            Product
          </label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Select a product</option>
            <option value="base-oil">Base Oil</option>
            <option value="paraffin-wax">Paraffin Wax</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-medium">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
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
            <span className="text-sm">
              I have read the cookie policy and privacy policy,
              I accept all conditions and want to continue working with the site
            </span>
          </label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`bg-prodexa-blue text-white px-6 py-3 rounded-md font-medium transition ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-opacity-90'
          }`}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
