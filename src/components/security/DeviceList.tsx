import React from 'react';
import { Laptop, X } from 'lucide-react';

interface Device {
  id: string;
  name: string;
  location: string;
  lastActive: string;
  current?: boolean;
}

const devices: Device[] = [
  { id: '1', name: 'ماك بوك برو', location: 'الرياض، السعودية', lastActive: 'الجلسة الحالية', current: true },
  { id: '2', name: 'آيفون 14', location: 'جدة، السعودية', lastActive: 'قبل ساعة' },
  { id: '3', name: 'آيباد برو', location: 'الدمام، السعودية', lastActive: 'قبل 3 أيام' },
];

export default function DeviceList() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium text-lg mb-4">الأجهزة المتصلة</h3>
      {devices.map((device) => (
        <div key={device.id} className="flex items-center justify-between p-4 bg-white rounded-lg border">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <Laptop className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <div className="font-medium">{device.name}</div>
              <div className="text-sm text-gray-600">{device.location}</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{device.lastActive}</span>
            {!device.current && (
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}