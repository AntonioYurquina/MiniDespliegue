import socket
import json
import random
import time
from datetime import datetime, timedelta
from os import getenv

# Configuración desde variables de entorno
HOST = getenv('RECEPTOR_HOST', '149.50.147.99')  # IP por defecto
PORT = int(getenv('RECEPTOR_PORT', '12345'))      # Puerto por defecto

def generar_fecha_aleatoria() -> str:
    """Genera una fecha en formato ISO con hora aleatoria del día actual."""
    inicio_dia = datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)
    segundos_aleatorios = random.randint(0, 86399)  # Rango de un día
    return (inicio_dia + timedelta(seconds=segundos_aleatorios)).isoformat()

def enviar_datos():
    with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as sock:
        while True:
            try:
                # Generar datos de prueba
                payload = {
                    "id_sensor": random.randint(1, 12),
                    "medicion": random.randint(1, 1024),
                    "fecha": generar_fecha_aleatoria()
                }

                # Convertir a JSON y enviar
                mensaje = json.dumps(payload).encode('utf-8')
                sock.sendto(mensaje, (HOST, PORT))
                
                print(f"[✅] Enviado a {HOST}:{PORT} - {payload}")
                
            except Exception as error:
                print(f"[❌] Error: {str(error)}")
            
            time.sleep(2)

if __name__ == '__main__':
    enviar_datos()
