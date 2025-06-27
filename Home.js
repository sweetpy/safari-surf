
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [form, setForm] = useState({ name: '', date: '', location: '', duration: '' });

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="p-8 text-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <h1 className="text-4xl font-bold mb-4">Stay Connected Anywhere in Tanzania</h1>
        <p className="mb-6">Unlimited WiFi for tourists, picked up directly at the airport.</p>
        <Button>Reserve Your Device</Button>
      </section>

      {/* Plans Section */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent>
            <h2 className="font-semibold text-xl">Weekly Plan</h2>
            <p>7 Days • $100</p>
            <p>Perfect for short-stay tourists</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="font-semibold text-xl">Monthly Plan</h2>
            <p>30 Days • $150</p>
            <p>Ideal for digital nomads</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="font-semibold text-xl">Refundable Deposit</h2>
            <p>$50 required for all plans</p>
          </CardContent>
        </Card>
      </section>

      {/* Booking Form */}
      <section className="p-6">
        <h2 className="text-2xl font-bold mb-4">Book Your WiFi Device</h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input placeholder="Your Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
          <Input placeholder="Arrival Date" type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} />
          <Input placeholder="Pickup Location (e.g. JNIA)" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} />
          <Input placeholder="Duration (Weekly/Monthly)" value={form.duration} onChange={e => setForm({ ...form, duration: e.target.value })} />
          <Button type="submit">Confirm Booking</Button>
        </form>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 p-6 text-center">
        <h2 className="text-lg font-medium">24/7 Support via WhatsApp</h2>
        <p>📞 +255-686-120-646 | ✉️ support@safarisurfwifi.com</p>
      </section>

      {/* Footer */}
      <footer className="p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Safari Surf WiFi. All rights reserved.
      </footer>
    </div>
  );
}
