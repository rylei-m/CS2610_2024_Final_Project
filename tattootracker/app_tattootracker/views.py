from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render, redirect

# Create your views here.
def home(request):
    tattoo = Tattoo.objects.first()
    return render(request, 'base.html', {'tattoo': tattoo})

def upload_tattoo(request):
    if request.method == 'POST':
        form = TattooForm(request.POST, request.FILES)
        if form.is_valid():
            tattoo = form.save(commit=False)
            tattoo.user = request.user
            tattoo.save()
            return redirect('view_tattoos')  # Redirect to a success page or profile
    else:
        form = TattooForm()
    return render(request, 'upload_tattoo.html', {'form': form})

# views.py
from django.shortcuts import render
from .models import Tattoo

from django.shortcuts import redirect

def view_tattoos(request):
    if request.user.is_authenticated:
        tattoos = Tattoo.objects.filter(user=request.user)
        # Render the page with user's tattoos
        return render(request, 'view_tattoos.html', {'tattoos': tattoos})
    else:
        # Redirect the user to the sign up page or public gallery
        return redirect('public_gallery')  # Replace 'public_gallery' with the name of your public gallery URL

from django.http import JsonResponse
from .models import Tattoo
from .forms import TattooForm
from django.contrib.auth.decorators import login_required

@login_required
def upload_handler(request):
    if request.method == 'POST' and request.FILES:
        form = TattooForm(request.POST, request.FILES)
        if form.is_valid():
            new_tattoo = form.save(commit=False)
            new_tattoo.user = request.user
            new_tattoo.save()
            return JsonResponse({'message': 'Success'}, status=200)
        else:
            return JsonResponse({'error': 'Form is not valid'}, status=400)
    return JsonResponse({'error': 'This method is not allowed'}, status=405)

# app_tattootracker/views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import Tattoo
from .forms import TattooForm

def edit_tattoo(request, tattoo_id):
    tattoo = get_object_or_404(Tattoo, pk=tattoo_id)
    if request.method == 'POST':
        form = TattooForm(request.POST, request.FILES, instance=tattoo)
        if form.is_valid():
            form.save()
            return redirect('view_tattoos')  # Redirect to a page where the user can see their tattoos
    else:
        form = TattooForm(instance=tattoo)
    return render(request, 'edit_tattoo.html', {'form': form, 'tattoo': tattoo})

# app_tattootracker/views.py

from django.shortcuts import render

def home_view(request):
    # Add any context or operations needed for the homepage
    return render(request, 'base.html')  # Ensure you have a template named 'home.html'


from django.shortcuts import render
from .models import Tattoo

def public_gallery(request):
    public_tattoos = Tattoo.objects.filter(is_public=True)
    return render(request, 'public_gallery.html', {'tattoos': public_tattoos})
