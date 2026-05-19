import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle2 } from 'lucide-react';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [problem, setProblem] = useState('');
  const [city, setCity] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitError('');

    try {
      setIsSubmitting(true);

      ];

      const text = `
🔧 Новая заявка CrimeaRepair

👤 Имя: ${name}
📞 Телефон: ${phone}
🏙 Город: ${city}
🛠 Проблема: ${problem || 'Не указана'}

🌐 Сайт: crimearepair.ru
⏰ ${new Date().toLocaleString()}
`;
      const response = await fetch('/send.php', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name,
    phone,
    city,
    problem,
  }),
});

const data = await response.json();

if (!data.success) {
  throw new Error('Ошибка отправки');
}

      setIsSubmitted(true);

      setName('');
      setPhone('');
      setCity('');
      setProblem('');
    } catch (error) {
      console.error('FULL ERROR:', error);
      setSubmitError('Ошибка отправки заявки');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-3xl shadow-2xl overflow-hidden p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-all"
            >
              <X size={24} />
            </button>

            {isSubmitted ? (
              <div className="py-12 text-center">
                <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={40} />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Заявка отправлена!
                </h3>

                <p className="text-slate-500">
                  Скоро мы с вами свяжемся.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Оставить заявку
                  </h3>

                  <p className="text-slate-500 text-sm">
                    Мы перезвоним вам в ближайшее время
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    required
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none"
                  />

                  <input
                    required
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none"
                  />
                  <input
  required
  type="text"
  value={city}
  onChange={(e) => setCity(e.target.value)}
  placeholder="Ваш город"
  className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none"
/>

                  <textarea
                    rows={3}
                    maxLength={150}
                    value={problem}
                    onChange={(e) => setProblem(e.target.value)}
                    placeholder="Опишите проблему"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl outline-none resize-none"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-lg"
                  >
                    {isSubmitting
                      ? 'Отправка...'
                      : 'Отправить заявку'}
                  </button>

                  {submitError && (
                    <p className="text-sm text-red-600 text-center">
                      {submitError}
                    </p>
                  )}
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
