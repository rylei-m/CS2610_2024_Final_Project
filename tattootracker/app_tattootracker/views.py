from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import TattooForm

# Create your views here.
def home(request):
    return render(request, 'index.html')

def upload_tattoo(request):
    if request.method == 'POST':
        form = TattooForm(request.POST, request.FILES)
        if form.is_valid():
            tattoo = form.save(commit=False)
            tattoo.user = request.user
            tattoo.save()
            return redirect('some_view_name')  # Redirect to a success page or profile
    else:
        form = TattooForm()
    return render(request, 'upload_tattoo.html', {'form': form})
