@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-float {
  animation: float 8s ease-in-out infinite;
}

.animate-fade-in {
  animation: fade-in 0.5s ease-out;
}

.animate-slide-down {
  animation: slide-down 0.3s ease-out;
}
