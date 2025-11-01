# Sample Table Guide: Property Bookings

This guide shows how to create and link custom tables to properties in your database.

## Example: Property Bookings Table

The `property_bookings` table demonstrates how to create related data tables that link to properties.

### Database Schema

```sql
CREATE TABLE public.property_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  property_id UUID REFERENCES public.properties(id) ON DELETE CASCADE,
  guest_name TEXT NOT NULL,
  guest_email TEXT NOT NULL,
  check_in DATE NOT NULL,
  check_out DATE NOT NULL,
  total_price TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
```

### Key Features

1. **Foreign Key Relationship**: `property_id` links to `properties` table
2. **Cascade Delete**: When a property is deleted, all its bookings are automatically deleted
3. **RLS Policies**: Security policies allow public read/write (adjust as needed)
4. **Realtime Updates**: Changes sync automatically across all clients
5. **Auto Timestamps**: `created_at` and `updated_at` managed automatically

### Usage Example in Code

```typescript
import { supabase } from '@/integrations/supabase/client';

// Fetch bookings for a specific property
const { data: bookings } = await supabase
  .from('property_bookings')
  .select('*')
  .eq('property_id', propertyId);

// Create a new booking
const { data, error } = await supabase
  .from('property_bookings')
  .insert({
    property_id: propertyId,
    guest_name: 'John Doe',
    guest_email: 'john@example.com',
    check_in: '2025-01-15',
    check_out: '2025-01-20',
    total_price: '$500',
    status: 'confirmed'
  });

// Update booking status
await supabase
  .from('property_bookings')
  .update({ status: 'completed' })
  .eq('id', bookingId);
```

### Creating Your Own Related Tables

Follow this pattern to create any related tables:

1. Add a foreign key column referencing `properties.id`
2. Use `ON DELETE CASCADE` if the data should be deleted with the property
3. Enable RLS and create appropriate policies
4. Add `created_at` and `updated_at` columns with triggers
5. Enable realtime for live updates

### Other Table Ideas

- **property_reviews**: Store guest reviews for properties
- **property_features**: Link amenities/features to properties
- **property_pricing**: Seasonal pricing for properties
- **property_availability**: Calendar availability tracking
- **property_maintenance**: Track maintenance requests
