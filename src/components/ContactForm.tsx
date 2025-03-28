'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'weight-loss'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      service: 'weight-loss'
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-[#2A4D48] font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-[#BADED7] focus:outline-none focus:ring-2 focus:ring-[#2A4D48]"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-[#2A4D48] font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-[#BADED7] focus:outline-none focus:ring-2 focus:ring-[#2A4D48]"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-[#2A4D48] font-medium mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-[#BADED7] focus:outline-none focus:ring-2 focus:ring-[#2A4D48]"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-[#2A4D48] font-medium mb-2">
          Service Interest
        </label>
        <select
          name="service"
          id="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-[#BADED7] focus:outline-none focus:ring-2 focus:ring-[#2A4D48]"
        >
          <option value="weight-loss">Weight Loss Hypnotherapy</option>
          <option value="emotional-eating">Emotional Eating Therapy</option>
          <option value="stress-management">Stress Management</option>
          <option value="confidence">Confidence Building</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-[#2A4D48] font-medium mb-2">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border border-[#BADED7] focus:outline-none focus:ring-2 focus:ring-[#2A4D48]"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-[#2A4D48] text-[#E8F7F1] px-6 py-3 rounded-lg font-semibold hover:bg-[#1A3D38] transition-colors"
        >
          Send Message
        </button>
      </div>
    </form>
  )
} 